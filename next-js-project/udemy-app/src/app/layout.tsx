import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="jp">
      <body>
        <header className="bg-blue-200 p-4">Rootヘッダー</header>
        {children} {/* 各ページの内容が表示される */}
      </body>
    </html>
  );
};

export default RootLayout;
