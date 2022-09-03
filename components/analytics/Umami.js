import Script from 'next/script'

import siteMetadata from '@/data/metadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        src="https://umami.example.com/umami.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
