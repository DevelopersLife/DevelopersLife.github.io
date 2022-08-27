import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllChannels(type) {
  const files = await getFiles(type)

  let channelCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.channel) {
      if (data.channel in channelCount) {
        channelCount[data.channel] += 1
      } else {
        channelCount[data.channel] = 1
      }
    }
  })

  return channelCount
}
