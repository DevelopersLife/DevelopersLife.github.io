import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import team from '@/data/team'

const DEFAULT_LAYOUT = 'AboutLayout'

export async function getStaticProps() {
  const about = await getFileBySlug('pages', ['about'])
  return {
    props: {
      about,
      team,
    },
  }
}

export default function About({ about, team }) {
  const { mdxSource, frontMatter } = about

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      team={team}
    />
  )
}
