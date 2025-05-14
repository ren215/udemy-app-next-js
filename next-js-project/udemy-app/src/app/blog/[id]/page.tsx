type Params = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Params) => {
  const { id } = await params;

  return <div>ブログ:{id}</div>;
};

export default page;
