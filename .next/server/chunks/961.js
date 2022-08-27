"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 8664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
// EXTERNAL MODULE: ./components/Tag.js
var Tag = __webpack_require__(9019);
// EXTERNAL MODULE: ./data/siteMetadata.js
var data_siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(data_siteMetadata);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Pagination.js


function Pagination({ totalPages , currentPage , entity  }) {
    const path = entity ? entity : "blog";
    const prevPage = parseInt(currentPage) - 1 > 0;
    const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "space-y-2 pt-6 pb-8 md:space-y-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex justify-between",
            children: [
                !prevPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    rel: "previous",
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !prevPage,
                    children: "Previous"
                }),
                prevPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: currentPage - 1 === 1 ? `/${path}/` : `/${path}/page/${currentPage - 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        rel: "previous",
                        children: "Previous"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        currentPage,
                        " of ",
                        totalPages
                    ]
                }),
                !nextPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    rel: "next",
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !nextPage,
                    children: "Next"
                }),
                nextPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: `/${path}/page/${currentPage + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        rel: "next",
                        children: "Next"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./lib/utils/formatDate.js

const formatDate = (date)=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);
    return now;
};
/* harmony default export */ const utils_formatDate = ((/* unused pure expression or super */ null && (formatDate)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./layouts/ListLayout.js








function ListLayout({ posts , title , initialDisplayPosts =[] , pagination , entity  }) {
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)("");
    const filteredBlogPosts = posts.filter((frontMatter)=>{
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative px-4 pt-16 pb-2 sm:px-6 lg:px-8 lg:pt-24 lg:pb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-1/3 sm:h-2/3"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative mx-auto max-w-7xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-900 text-3xl font-extrabold tracking-tight sm:text-4xl",
                                    children: title ? title : ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative mt-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        "aria-label": `Cerca ${entity ? entity : ""}`,
                                        type: "text",
                                        onChange: (e)=>setSearchValue(e.target.value)
                                        ,
                                        placeholder: `Cerca ${entity ? entity : ""}`,
                                        className: "text-900 dark:text-100 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "text-400 dark:text-300 absolute right-3 top-3 h-5 w-5",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto mt-2 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",
                                children: [
                                    !filteredBlogPosts.length && `No ${entity ? entity : "data"} found.`,
                                    displayPosts.map((frontmatter)=>{
                                        const channel = frontmatter.channel;
                                        const slug = frontmatter.slug;
                                        const date = frontmatter.date.split("T")[0];
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col overflow-hidden rounded-lg shadow-lg",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        className: "h-48 w-full object-cover",
                                                        src: `http://img.youtube.com/vi/${frontmatter.id}/mqdefault.jpg`,
                                                        alt: frontmatter.title,
                                                        width: "320px",
                                                        height: "180px",
                                                        layout: "responsive",
                                                        objectFit: "contain"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-1 flex-col justify-between px-6 pb-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                href: `/video/${slug}`,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "mt-2 block",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-900 text-xl font-semibold",
                                                                            children: frontmatter.title
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-500 mt-3 text-base",
                                                                            children: frontmatter.description_short ? frontmatter.description_short : ""
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mt-6 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: `${channel}`,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "sr-only",
                                                                                children: channel
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                                className: "h-10 w-10 rounded-full",
                                                                                src: `${(siteMetadata_default()).siteUrl}/static/channels/${channel}.png`,
                                                                                alt: "",
                                                                                width: "60",
                                                                                height: "60"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "ml-3",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-900 text-sm font-medium",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: `/channel/${channel}`,
                                                                                className: "hover:underline",
                                                                                children: channel
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "text-500 flex space-x-1 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                                                    dateTime: date,
                                                                                    children: date
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    "aria-hidden": "true",
                                                                                    children: "\xb7"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                                    href: frontmatter.link,
                                                                                    target: "_blank",
                                                                                    rel: "noreferrer",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "no-underline hover:underline",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: "Guarda il video"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, frontmatter.title);
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative px-6 pb-2 sm:px-8 lg:px-8 lg:pb-4",
                children: pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                    entity: entity ? entity : "data",
                    currentPage: pagination.currentPage,
                    totalPages: pagination.totalPages
                })
            })
        ]
    });
};


/***/ })

};
;