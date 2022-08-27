import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'
import HomeLayout from '@/layouts/HomeLayout'

const DEFAULT_LAYOUT = 'HomeLayout'

export async function getStaticProps() {
  const homeDetails = await getFileBySlug('pages', ['home'])
  return {
    props: {
      homeDetails,
    },
  }
}

export default function Home({ homeDetails }) {
  const { mdxSource, frontMatter } = homeDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
