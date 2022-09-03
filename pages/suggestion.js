import siteMetadata from "@/data/metadata";
import {PageSEO} from "@/components/SEO";


export default function About() {
    const seoObject = {
        authorDetails: [
            {name: "DevelopersLife WebSite"},
        ],
        title: "Suggerimenti - DevelopersLife",
        summary: "Suggerisci nuovi video o contenuti - DevelopersLife",
        date: new Date(),
        lastmod: new Date(),
        url: `${siteMetadata.siteUrl}/suggestion`
    }

    return (
        <>
            <PageSEO title={seoObject.title} description={seoObject.summary}/>
            <div>
                <div className="content-center">
                    <iframe
                        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeRJllT4LKpJMmkEeZB3M43c_XOfq9x_Pk9LxKOdsd5J1-KNA/viewform?embedded=true"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        width="800"
                        height="600"
                    >
                        Caricamento…
                    </iframe>
                </div>
            </div>
        </>
    )
}
