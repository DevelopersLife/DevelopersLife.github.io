import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/metadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Link from '@/components/Link'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { id, link, title, description_short, date, tags, slug, description, channel } = frontMatter
  const onlyDate = date.split("T")[0];

  const parsedTags = tags.filter(t => typeof t === "string")

  const seoObject = {
    authorDetails: [
      {name: channel},
    ],
    title,
    summary: description,
    date,
    lastmod: new Date(),
    url: `${siteMetadata.siteUrl}/video/${channel}/${slug}`
  }

  return (
    <SectionContainer>
      <BlogSEO {...seoObject} />
      <ScrollTopAndComment />
      <div>
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1">
              <a href={link} target="_blank" rel="noreferrer">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                  <Image
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt={title}
                    className="object-cover object-center"
                    width="340px"
                    height="170px"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </a>
            </div>

            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-extrabold tracking-tight text-900 sm:text-3xl">
                    {title}
                  </h1>

                  <h2 id="information-heading" className="sr-only">
                    Descrizione
                  </h2>
                  <p className="mt-2 text-sm text-500">
                    Caricato il {onlyDate}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-xs text-500">
                <p className="text-xl">Descrizione:</p>
                <p className="text-lg text-500">
                  <strong>{description_short}</strong>
                </p>
              </div>

              <div className="mt-2 border-t border-200 pt-2">
                <h3 className="text-sm font-medium text-900">Tags: </h3>
                <div className="prose prose-sm mt-2 text-500">
                  {parsedTags.map((t) => {
                    return <span key={t}>
                      <Link href={`/tags/${t}`}>
                        {t}
                      </Link>&nbsp;&nbsp;
                    </span>
                  })}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <Link href={link} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Guarda su YouTube
                  </button>
                </Link>
              </div>

              <div className="mt-2 border-t border-gray-200 pt-2">
                <h3 className="text-sm font-medium text-900">Condividi</h3>
                <ul role="list" className="mt-4 flex items-center space-x-6">
                  <li>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteMetadata.siteUrl}/video/${channel}/${slug}`}
                        target="_blank"
                        className="flex h-6 w-6 items-center justify-center text-400 hover:text-500"
                    >
                      <span className="sr-only">Share on LinkedIn</span>
                      <svg
                          className="h-6 w-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${title} guarda questo video:+${siteMetadata.siteUrl}/video/${channel}/${slug}`}
                      target="_blank"
                      className="flex h-6 w-6 items-center justify-center text-400 hover:text-500"
                    >
                      <span className="sr-only">Share on Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${siteMetadata.siteUrl}/video/${channel}/${slug}`}
                        target="_blank"
                        className="flex h-6 w-6 items-center justify-center text-400 hover:text-500"
                    >
                      <span className="sr-only">Share on Facebook</span>
                      <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                      >
                        <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
            <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
              <svg
                className="absolute top-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
              </svg>
              <svg
                className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
              </svg>
              <svg
                className="absolute bottom-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
                  Descrizione
                </span>
                <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-900 sm:text-4xl">
                  {title}
                </span>
              </h1>
              {children}
              <script type="text/javascript" src="/static/scripts/caption.js"></script>
              <br />
              {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                        <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Articolo Precedente
                          </h2>
                          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            <Link href={`/video/${prev.slug}`}>{prev.title}</Link>
                          </div>
                        </div>
                    )}
                    {next && (
                        <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Articolo Successivo
                          </h2>
                          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            <Link href={`/video/${next.slug}`}>{next.title}</Link>
                          </div>
                        </div>
                    )}
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
