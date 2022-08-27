"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ generate_rss)
});

;// CONCATENATED MODULE: ./lib/utils/htmlEscaper.js
const { replace  } = "";
// escape
const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
const ca = /[&<>'"]/g;
const esca = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
};
const pe = (m)=>esca[m]
;
/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */ const htmlEscaper_escape = (es1)=>replace.call(es1, ca, pe)
;

// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./lib/generate-rss.js


const generateRssItem = (post)=>`
  <item>
    <guid>${(siteMetadata_default()).siteUrl}/blog/${post.slug}</guid>
    <title>${htmlEscaper_escape(post.title)}</title>
    <link>${(siteMetadata_default()).siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${htmlEscaper_escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${(siteMetadata_default()).email} (${(siteMetadata_default()).author})</author>
    ${post.tags && post.tags.map((t)=>`<category>${t}</category>`
    ).join("")}
  </item>
`
;
const generateRss = (posts, page = "feed.xml")=>`
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${htmlEscaper_escape((siteMetadata_default()).title)}</title>
      <link>${(siteMetadata_default()).siteUrl}/blog</link>
      <description>${htmlEscaper_escape((siteMetadata_default()).description)}</description>
      <language>${(siteMetadata_default()).language}</language>
      <managingEditor>${(siteMetadata_default()).email} (${(siteMetadata_default()).author})</managingEditor>
      <webMaster>${(siteMetadata_default()).email} (${(siteMetadata_default()).author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${(siteMetadata_default()).siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`
;
/* harmony default export */ const generate_rss = (generateRss);


/***/ })

};
;