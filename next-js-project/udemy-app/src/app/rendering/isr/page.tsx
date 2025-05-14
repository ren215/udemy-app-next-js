import Image from 'next/image';

export const revalidate = 10; // 10秒ごとに更新

const ISRPage = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 10 }, // 10秒ごとにデータを取得
  });

  const resJson = await res.json();
  const image = resJson.message;
  const timeStamp = new Date().toISOString();

  return (
    <div>
      ISR 10秒ごとにリロード:{timeStamp}
      <Image src={image} width={400} height={400} alt={'dog'} />
    </div>
  );
};

export default ISRPage;
