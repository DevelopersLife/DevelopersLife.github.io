import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'VideoLayout'

export async function getStaticPaths() {
  const posts = getFiles('video')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('video')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] ? {
    title: allPosts[postIndex + 1].title,
    slug: allPosts[postIndex + 1].slug
  }: null
  const next = allPosts[postIndex - 1] ? {
    title: allPosts[postIndex - 1].title,
    slug: allPosts[postIndex - 1].slug
  }: null
  const post = await getFileBySlug('video', params.slug.join('/'))

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {
    props: {
      post,
      prev,
      next,
    },
  }
}

export default function Blog({ post, prev, next }) {
  const { mdxSource, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
