import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/metadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'

const POSTS_PER_PAGE = 9

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('video')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const rawPosts = await getAllFilesFrontMatter('video')
  const posts = rawPosts.map(p => {
    return {
      channel: p.channel,
      slug: p.slug,
      date: p.date,
      title: p.title,
      id: p.id,
      description_short: p.description_short,
      link: p.link,
      tags: p.tags
    }
  })
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }



  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        entity={'video'}
        title="Gli ultimi video"
      />
    </>
  )
}
