'use client';

import { submitContactForm } from '@/lib/actions/contact';
import { FocusEvent, useActionState, useState } from 'react';

import { ContactSchema } from '@/validations/contact';
import { z } from 'zod';
import './style/ContactForm.scss';

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, { success: false, errors: {} });
  const [clientErrors, setClientErrors] = useState({ name: '', email: '' });

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    try {
      if (name === 'name') {
        ContactSchema.pick({ name: true }).parse({ name: value });
      } else if (name === 'email') {
        ContactSchema.pick({ email: true }).parse({ email: value });
      }

      setClientErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0]?.message ?? '';
        setClientErrors((prev) => ({
          ...prev,
          [name]: errorMessage,
        }));
      }
    }
  };

  return (
    <form className="form" action={formAction}>
      <div className="form-container">
        <div className="form-box">
          <h2 className="form-title">お問い合わせ</h2>
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              名前
            </label>
            <input type="text" id="name" name="name" className="form-input" onBlur={handleBlur} />
            {state.errors.name && <p className="error-message">{state.errors.name.join(',')}</p>}
            {clientErrors.name && <p className="error-message">{clientErrors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              メールアドレス
            </label>
            <input id="email" name="email" className="form-input" onBlur={handleBlur} />
            {state.errors.email && <p className="error-message">{state.errors.email}</p>}
            {clientErrors.email && <p className="error-message">{clientErrors.email}</p>}
          </div>
          <button type="submit" className="form-button">
            送信
          </button>
        </div>
      </div>
    </form>
  );
}
