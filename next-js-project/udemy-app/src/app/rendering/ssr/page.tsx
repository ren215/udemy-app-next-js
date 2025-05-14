import Image from 'next/image';

export const dynamic = 'force-dynamic'; // SSR強制

const SSRPage = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-store', // 絶対にキャッシュを使わず、サーバーから常に新しいレスポンスを取得する
  });

  const resJson = await res.json();
  const image = resJson.message;
  const timeStamp = new Date().toISOString();

  return (
    <div>
      SSR 毎回リロード:{timeStamp}
      <Image src={image} width={400} height={400} alt={'dog'} />
    </div>
  );
};

export default SSRPage;
