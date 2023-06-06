import ArticleItem from "./ArticleItem"

const ArticleList = ({ articles }) => {
  return (
    <div className='mb-32 grid lg:grid-cols-3 lg:text-left p-16 gap-6'>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList