exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AboutLayout": 9032,
	"./AboutLayout.js": 9032,
	"./HomeLayout": 3568,
	"./HomeLayout.js": 3568,
	"./ListLayout": 8664,
	"./ListLayout.js": 8664,
	"./VideoLayout": 4109,
	"./VideoLayout.js": 4109
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mdx-bundler/client"
var client_ = __webpack_require__(1228);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(7661);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
;// CONCATENATED MODULE: ./components/TOCInline.js

/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */ /**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ="" ,  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.js


const Pre = (props)=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-green-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: props.children
            })
        ]
    });
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./components/NewsletterForm.js



const NewsletterForm = ({ title ="Subscribe to the newsletter"  })=>{
    const inputEl = (0,external_react_.useRef)(null);
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: subscribed , 1: setSubscribed  } = (0,external_react_.useState)(false);
    const subscribe = async (e)=>{
        e.preventDefault();
        const res = await fetch(`/api/${(siteMetadata_default()).newsletter.provider}`, {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const { error  } = await res.json();
        if (error) {
            setError(true);
            setMessage("Your e-mail address is invalid or you are already subscribed!");
            return;
        }
        inputEl.current.value = "";
        setError(false);
        setSubscribed(true);
        setMessage("Successfully! \uD83C\uDF89 You are now subscribed.");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "flex flex-col sm:flex-row",
                onSubmit: subscribe,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "sr-only",
                                htmlFor: "email-input",
                                children: "Email address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                autoComplete: "email",
                                className: "w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",
                                id: "email-input",
                                name: "email",
                                placeholder: subscribed ? "You're subscribed !  \uD83C\uDF89" : "Enter your email",
                                ref: inputEl,
                                required: true,
                                type: "email",
                                disabled: subscribed
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ${subscribed ? "cursor-default" : "hover:bg-primary-700 dark:hover:bg-primary-400"} focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`,
                            type: "submit",
                            disabled: subscribed,
                            children: subscribed ? "Thank you!" : "Sign up"
                        })
                    })
                ]
            }),
            error1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",
                children: message
            })
        ]
    });
};
/* harmony default export */ const components_NewsletterForm = ((/* unused pure expression or super */ null && (NewsletterForm)));
const BlogNewsletterForm = ({ title  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {
                title: title
            })
        })
    })
;

;// CONCATENATED MODULE: ./components/MDXComponents.js

/* eslint-disable react/display-name */ 






const MDXComponents = {
    Image: Image/* default */.Z,
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    BlogNewsletterForm: BlogNewsletterForm,
    wrapper: ({ components , layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            ...rest
        });
    }
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    });
};


/***/ }),

/***/ 9032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2557);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7661);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9831);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const supportLinks = [
    {
        name: "YouTube",
        href: "https://www.youtube.com/c/DevelopersLifeChannel",
        description: "Sul canale YouTube DevelopersLife puoi trovare tantissimi video interessanti sulla vita e il lavoro dei Developer",
        icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                fill: "currentColor",
                viewBox: "0 0 24 24",
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                    clipRule: "evenodd"
                })
            })
    },
    {
        name: "Telegram",
        href: "https://t.me/developerslifechannel",
        description: "In questa chat tutti i membri di DevelopersLife possono scambiarsi opinioni e aiutarsi per diventare insieme Developer migliori!",
        icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                fill: "currentColor",
                viewBox: "0 0 24 24",
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                    clipRule: "evenodd"
                })
            })
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/developerslifechannel/",
        description: "Qui in genere raccogliamo foto e copertine dei video di DevelopersLife pubblicati, non \xe8 il canale principale ma ci trovi anche l\xec",
        icon: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                fill: "currentColor",
                viewBox: "0 0 24 24",
                ...props,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                    clipRule: "evenodd"
                })
            })
    }, 
];
function AboutLayout({ frontMatter , team  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative bg-gray-800 pb-32",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: "h-full w-full object-cover",
                                            src: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                                            alt: "",
                                            layout: "fill"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-0 bg-gray-800 mix-blend-multiply",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl",
                                            children: "Chi Siamo"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-6 max-w-3xl text-xl text-gray-300",
                                            children: [
                                                "DevelopersLife \xe8 la community per Developer e aspiranti! ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Il nostro scopo \xe8 aiutare tutti i Developer o chi vuole diventarlo. ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Lo facciamo raccontando la vita e il lavoro degli Sviluppatori Softwaare ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8",
                            "aria-labelledby": "contact-heading",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "sr-only",
                                    id: "contact-heading",
                                    children: "Chi Siamo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8",
                                    children: supportLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col rounded-2xl bg-white shadow-xl",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "relative flex-1 px-6 pt-16 pb-8 md:px-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(link.icon, {
                                                                className: "h-6 w-6 text-white",
                                                                "aria-hidden": "true"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-xl font-medium text-gray-900",
                                                            children: link.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-4 text-base text-gray-500",
                                                            children: link.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        href: link.href,
                                                        className: "text-base font-medium text-indigo-700 hover:text-indigo-600",
                                                        children: [
                                                            "Seguici",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                children: " \u2192"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, link.name)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-5 sm:space-y-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-3xl font-extrabold tracking-tight sm:text-4xl",
                                                children: "Le persone"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xl text-gray-500",
                                                children: "DevelopersLife \xe8 una community, non c'\xe8 un team ma solo tanti volontari che giorno per giorno portano avanti questo grande progetto."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            role: "list",
                                            className: "space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8",
                                            children: team.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-4 lg:space-x-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                className: "h-16 w-16 rounded-full lg:h-20 lg:w-20",
                                                                src: "/static/photos/" + person.imageUrl,
                                                                alt: "",
                                                                height: 80,
                                                                width: 80
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "space-y-1 text-lg font-medium leading-6",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: person.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-indigo-600",
                                                                        children: person.role
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, person.name)
                                            )
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9831);



function HomeLayout({ frontMatter  }) {
    const { metadata_name , metadata_description  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: `${metadata_name}`,
                description: `${metadata_description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative shadow-xl sm:overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    className: "h-full w-full object-cover",
                                                    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                                                    alt: "People working on laptops",
                                                    layout: "fill",
                                                    priority: "false"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute inset-0 bg-indigo-700 mix-blend-multiply"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "block text-white",
                                                            children: "DevelopersLife"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "block text-indigo-200",
                                                            children: "Community"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl",
                                                    children: "La community di chi \xe8 Developer o lo sar\xe0 in futuro!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8",
                                                                children: "Get started"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8",
                                                                children: "Live demo"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 4109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(890);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(9831);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(7661);
// EXTERNAL MODULE: ./components/Tag.js
var Tag = __webpack_require__(9019);
// EXTERNAL MODULE: ./data/siteMetadata.js
var data_siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(data_siteMetadata);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/comments/index.js



const UtterancesComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    const comment = siteMetadata === null || siteMetadata === void 0 ? void 0 : siteMetadata.comment;
    if (!comment || Object.keys(comment).length === 0) return /*#__PURE__*/ _jsx(_Fragment, {});
    return /*#__PURE__*/ _jsxs("div", {
        id: "comment",
        children: [
            siteMetadata.comment && siteMetadata.comment.provider === "giscus" && /*#__PURE__*/ _jsx(GiscusComponent, {}),
            siteMetadata.comment && siteMetadata.comment.provider === "utterances" && /*#__PURE__*/ _jsx(UtterancesComponent, {}),
            siteMetadata.comment && siteMetadata.comment.provider === "disqus" && /*#__PURE__*/ _jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    });
};
/* harmony default export */ const comments = ((/* unused pure expression or super */ null && (Comments)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ScrollTopAndComment.js



const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll)
        ;
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById("comment").scrollIntoView();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: [
            (siteMetadata_default()).comment.provider && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Comment",
                type: "button",
                onClick: handleScrollToComment,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Top",
                type: "button",
                onClick: handleScrollTop,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_ScrollTopAndComment = (ScrollTopAndComment);

// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
;// CONCATENATED MODULE: ./layouts/VideoLayout.js









function PostLayout({ frontMatter , content , next , prev , children  }) {
    const { id , link , title , description_short , description , date , tags , slug  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* BlogSEO */.Uy, {
                url: `${(siteMetadata_default()).siteUrl}/video/${slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollTopAndComment, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:col-span-4 lg:row-end-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: link,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                                src: `http://img.youtube.com/vi/${id}/mqdefault.jpg`,
                                                alt: title,
                                                className: "object-cover object-center",
                                                width: "340px",
                                                height: "170px",
                                                layout: "responsive",
                                                objectFit: "contain"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col-reverse",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                                                        children: title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        id: "information-heading",
                                                        className: "sr-only",
                                                        children: "Descrizione"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mt-2 text-sm text-gray-500",
                                                        children: [
                                                            "Caricato il ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                                dateTime: date,
                                                                children: date
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-6 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl",
                                                    children: "Descrizione:"
                                                }),
                                                description_short
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-2 border-t border-gray-200 pt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: "Tags: "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "prose prose-sm mt-2 text-gray-500",
                                                    children: tags.join(", ")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: link,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",
                                                    children: "Guarda su YouTube"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-2 border-t border-gray-200 pt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: "Condividi"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    role: "list",
                                                    className: "mt-4 flex items-center space-x-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Share on Facebook"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-5 w-5",
                                                                        "aria-hidden": "true",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Share on Instagram"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-6 w-6",
                                                                        "aria-hidden": "true",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Share on Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-5 w-5",
                                                                        "aria-hidden": "true",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                                                        })
                                                                    })
                                                                ]
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
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative overflow-hidden bg-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative mx-auto h-full max-w-prose text-lg",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "absolute top-12 left-full translate-x-32 transform",
                                            width: 404,
                                            height: 384,
                                            fill: "none",
                                            viewBox: "0 0 404 384",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                                                        id: "74b3fd99-0a6f-4271-bef2-e80eeafdf357",
                                                        x: 0,
                                                        y: 0,
                                                        width: 20,
                                                        height: 20,
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            x: 0,
                                                            y: 0,
                                                            width: 4,
                                                            height: 4,
                                                            className: "text-gray-200",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: 404,
                                                    height: 384,
                                                    fill: "url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform",
                                            width: 404,
                                            height: 384,
                                            fill: "none",
                                            viewBox: "0 0 404 384",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                                                        id: "f210dbf6-a58d-4871-961e-36d5016a0f49",
                                                        x: 0,
                                                        y: 0,
                                                        width: 20,
                                                        height: 20,
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            x: 0,
                                                            y: 0,
                                                            width: 4,
                                                            height: 4,
                                                            className: "text-gray-200",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: 404,
                                                    height: 384,
                                                    fill: "url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "absolute bottom-12 left-full translate-x-32 transform",
                                            width: 404,
                                            height: 384,
                                            fill: "none",
                                            viewBox: "0 0 404 384",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                                                        id: "d3eb07ae-5182-43e6-857d-35c643af9034",
                                                        x: 0,
                                                        y: 0,
                                                        width: 20,
                                                        height: 20,
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            x: 0,
                                                            y: 0,
                                                            width: 4,
                                                            height: 4,
                                                            className: "text-gray-200",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: 404,
                                                    height: 384,
                                                    fill: "url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mx-auto max-w-prose text-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block text-center text-base font-semibold uppercase tracking-wide text-indigo-600",
                                                    children: "Descrizione"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl",
                                                    children: title
                                                })
                                            ]
                                        }),
                                        children,
                                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                                            type: "text/javascript",
                                            src: "/static/scripts/caption.js"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (next || prev) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                        children: [
                            prev && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                        children: "Previous Article"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: `/video/${prev.slug}`,
                                            children: prev.title
                                        })
                                    })
                                ]
                            }),
                            next && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                        children: "Next Article"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: `/video/${next.slug}`,
                                            children: next.title
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;