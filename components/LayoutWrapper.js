import siteMetadata from '@/data/metadata'
import navigation from '@/data/navigation'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from '@/components/Image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10 px-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3" style={{marginTop: "20px"}}>
                  {/*<Logo />*/}
                  <Image
                    src={`${siteMetadata.siteUrl}/static/images/developerslife_logo.png`}
                    width="48px"
                    height="48px"
                    style="margin-top:10px"
                    alt="developerslife_logo"
                  />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block" style={{lineHeight: 1}}>
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {navigation.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
