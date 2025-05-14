import Image from 'next/image';

const SSGPage = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

  const resJson = await res.json();
  const image = resJson.message;
  const timeStamp = new Date().toISOString();

  return (
    <div>
      SSG ビルド時に生成され固定: {timeStamp}
      <Image src={image} width={400} height={400} alt={'dog'} />
    </div>
  );
};

export default SSGPage;
