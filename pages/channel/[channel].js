import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/metadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import fs from 'fs'
import path from 'path'
import { getAllChannels } from '@/lib/channels'

const root = process.cwd()

export async function getStaticPaths() {
  const channels = await getAllChannels('video')

  return {
    paths: Object.keys(channels).map((channel) => ({
      params: {
        channel,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('video')
  const filteredPosts = allPosts.filter((post) => post.channel.includes(params.channel))

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `channel/${params.channel}/feed.xml`)
    const rssPath = path.join(root, 'public', 'channel', params.channel)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return {
    props: {
      posts: filteredPosts,
      channel: params.channel,
    },
  }
}

export default function Channel({ posts, channel }) {
  const title = `Tutti i video di ${channel}`;
  const description = `Tutti i video del canale ${channel}`;
  return (
    <>
      <TagSEO title={title} description={description} />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
