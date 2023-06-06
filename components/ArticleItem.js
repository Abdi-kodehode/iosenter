import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link
      className="max-w-sm rounded overflow-hidden shadow-lg"
      href="/article/[id]"
      as={`/article/${article.id}`}
    >
      <img
        className="w-full"
        src="https://placehold.co/600x400/png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
