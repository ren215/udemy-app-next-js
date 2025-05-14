import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(3, '名前は3文字以上で入力してください').max(20, '名前は20文字以内で入力してください'),
  email: z.string().nonempty('メールアドレスは必須です。').email('正しいメールアドレスの形式で入力して下さい'),
});

// 型の定義（フォームやAPIで使用）
export type ContactType = z.infer<typeof ContactSchema>;
