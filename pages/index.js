import PrayerTime from '@/components/PrayerTime';
import ArticleList from '@/components/ArticleList';
import { server } from '@/config';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles}) {
  return (
    <>
      <div className="flex flex-col p-8 md:flex-row md:p-20">
        <div className="w-full md:w-full">
          <PrayerTime />
        </div>
        <div className="md:pl-8">
          <h2 className="text-4xl font-bold pb-4">Om Oss</h2>
          <p className="text-lg">
            Enim et aliqua labore incididunt veniam. Est qui eu nostrud id
            consequat tempor esse velit fugiat sit ullamco anim pariatur id.
            Consequat ipsum deserunt veniam dolore adipisicing ullamco sit ea
            culpa Lorem ullamco duis ad est. Labore anim aute cupidatat
            excepteur laboris est anim deserunt ullamco et cupidatat.
          </p>
        </div>
      </div>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}