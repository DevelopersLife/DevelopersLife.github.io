import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import fs from 'fs'

const DEFAULT_LAYOUT = 'AboutLayout'

export async function getStaticProps() {
  const about = await getFileBySlug('pages', ['about'])
  const teamRaw = fs.readFileSync(`./data/team.json`)
  const team = JSON.parse(teamRaw)
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
