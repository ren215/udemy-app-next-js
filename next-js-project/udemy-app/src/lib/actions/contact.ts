'use server'; // サーバー側で実行するように設定

import { ContactSchema } from '@/validations/contact';
import { redirect } from 'next/navigation';
import { prisma } from '../prisma';

// ActionStateの型定義
type ActionState = {
  success: boolean;
  errors: { name?: string[]; email?: string[] };
  serverError?: string;
};

export const submitContactForm = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
  // 入力された値を取得
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // バリデーション
  const validationResult = ContactSchema.safeParse({ name, email }); // safeParseとはバリデーションするための関数
  // バリデーションエラーの場合
  if (!validationResult.success) {
    //  エラーメッセージの取得 flattenでエラーを見やすく加工
    const errors = validationResult.error.flatten().fieldErrors;

    console.log(`サーバー側でエラー:${JSON.stringify(errors, null, 2)}`);

    // エラーをレスポンスとして返す
    return { success: false, errors: { name: errors.name ?? [], email: errors.email ?? [] } };
  }

  // DB登録
  // メールアドレスが存在しているかを確認
  const existingRecord = await prisma.contact.findUnique({ where: { email: email } });
  if (existingRecord) {
    return { success: false, errors: { name: [], email: ['このメールアドレスはすでに登録されています。'] } };
  }

  await prisma.contact.create({
    data: { name, email },
  });

  console.log(`送信されたデータ 名前：${name},メールアドレス：${email}`);

  redirect('/contacts/list');
};
