"use strict";
exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 9831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TQ": () => (/* binding */ PageSEO),
/* harmony export */   "$t": () => (/* binding */ TagSEO),
/* harmony export */   "Uy": () => (/* binding */ BlogSEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);




const CommonSEO = ({ title , description , ogType , ogImage , twImage , canonicalUrl  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "follow, index"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl)}${router.asPath}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: ogType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title
            }),
            ogImage.constructor.name === "Array" ? ogImage.map(({ url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: url
                }, url)
            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: ogImage
            }, ogImage),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:site",
                content: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().twitter)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: twImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: canonicalUrl ? canonicalUrl : `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl)}${router.asPath}`
            })
        ]
    });
};
const PageSEO = ({ title , description  })=>{
    const ogImageUrl = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl) + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().socialBanner);
    const twImageUrl = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl) + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().socialBanner);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommonSEO, {
        title: title,
        description: description,
        ogType: "website",
        ogImage: ogImageUrl,
        twImage: twImageUrl
    });
};
const TagSEO = ({ title , description  })=>{
    const ogImageUrl = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl) + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().socialBanner);
    const twImageUrl = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl) + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().socialBanner);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommonSEO, {
                title: title,
                description: description,
                ogType: "website",
                ogImage: ogImageUrl,
                twImage: twImageUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "alternate",
                    type: "application/rss+xml",
                    title: `${description} - RSS feed`,
                    href: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl)}${router.asPath}/feed.xml`
                })
            })
        ]
    });
};
const BlogSEO = ({ authorDetails , title , summary , date , lastmod , url , images =[] , canonicalUrl ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const publishedAt = new Date(date).toISOString();
    const modifiedAt = new Date(lastmod || date).toISOString();
    let imagesArr = images.length === 0 ? [
        (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().socialBanner)
    ] : typeof images === "string" ? [
        images
    ] : images;
    const featuredImages = imagesArr.map((img)=>{
        return {
            "@type": "ImageObject",
            url: img.includes("http") ? img : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl) + img
        };
    });
    let authorList;
    if (authorDetails) {
        authorList = authorDetails.map((author)=>{
            return {
                "@type": "Person",
                name: author.name
            };
        });
    } else {
        authorList = {
            "@type": "Person",
            name: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().author)
        };
    }
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        },
        headline: title,
        image: featuredImages,
        datePublished: publishedAt,
        dateModified: modifiedAt,
        author: authorList,
        publisher: {
            "@type": "Organization",
            name: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().author),
            logo: {
                "@type": "ImageObject",
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl)}${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteLogo)}`
            }
        },
        description: summary
    };
    const twImageUrl = featuredImages[0].url;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommonSEO, {
                title: title,
                description: summary,
                ogType: "article",
                ogImage: featuredImages,
                twImage: twImageUrl,
                canonicalUrl: canonicalUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:published_time",
                        content: publishedAt
                    }),
                    lastmod && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:modified_time",
                        content: modifiedAt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(structuredData, null, 2)
                        }
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;