type ArticleType = {
  id: string;
  title: string;
};

// ダミーデータ
const articles = [
  { id: '1', title: 'タイトル' },
  { id: '2', title: 'タイトル2' },
  { id: '3', title: 'タイトル3' },
  { id: '4', title: 'タイトル4' },
  { id: '5', title: 'タイトル5' },
] as ArticleType[];

// 3秒待機
const fetchArticles = async (): Promise<ArticleType[]> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 3000);
  });

  return articles;
};

const BlogPage = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
