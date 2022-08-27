import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import {BlogSEO} from "@/components/SEO";

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, entity }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const seoObject = {
    authorDetails: [
      {name: "DevelopersLife WebSite"},
    ],
    title: "Video - DevelopersLife",
    summary: "Diventare uno sviluppatore software, video per imparare a programmare. Impara a programmare!",
    date: new Date(),
    lastmod: new Date(),
  }

  return (
    <>
      <BlogSEO {...seoObject} />
      <div className="relative px-4 pt-16 pb-2 sm:px-6 lg:px-8 lg:pt-24 lg:pb-4">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title ? title : ''}
            </h2>
          </div>
          <div className="relative mt-6">
            <input
              aria-label={`Cerca ${entity ? entity : ''}`}
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`Cerca ${entity ? entity : ''}`}
              className="text-900 dark:text-100 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800"
            />
            <svg
              className="text-400 dark:text-300 absolute right-3 top-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="mx-auto mt-2 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {!filteredBlogPosts.length && `No ${entity ? entity : 'data'} found.`}
            {displayPosts.map((frontmatter) => {
              const channel = frontmatter.channel
              const slug = frontmatter.slug
              const date = frontmatter.date.split('T')[0]
              return (
                <div
                  key={frontmatter.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={`https://img.youtube.com/vi/${frontmatter.id}/mqdefault.jpg`}
                      alt={frontmatter.title}
                      width="320px"
                      height="180px"
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-6 pb-6">
                    <div className="flex-1">
                      <Link href={`/video/${slug}`}>
                        <span className="mt-2 block">
                          <p className="text-900 text-xl font-semibold">{frontmatter.title}</p>
                          <p className="text-500 mt-3 text-base">
                            {frontmatter.description_short ? frontmatter.description_short : ''}
                          </p>
                        </span>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={`${channel}`}>
                          <span className="sr-only">{channel}</span>
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={`${siteMetadata.siteUrl}/static/channels/${channel}.png`}
                            alt=""
                            width="60"
                            height="60"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-900 text-sm font-medium">
                          <a href={`/channel/${channel}`} className="hover:underline">
                            {channel}
                          </a>
                        </p>
                        <div className="text-500 flex space-x-1 text-sm">
                          <time dateTime={date}>{date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <Link href={frontmatter.link} target="_blank" rel="noreferrer">
                            <span className="no-underline hover:underline">
                              <span>Guarda il video</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="relative px-6 pb-2 sm:px-8 lg:px-8 lg:pb-4">
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination
            entity={entity ? entity : 'data'}
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        )}
      </div>
    </>
  )
}
