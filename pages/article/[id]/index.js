import { server } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '@/components/Meta'

const article = ({ article }) => {

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div className='container my-24 mx-auto md:px-6'>
        {/* <img src='https://placehold.co/600x400/png' alt='image' className='mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20' /> */}
        <h1 className='mb-6 text-3xl font-bold'>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
