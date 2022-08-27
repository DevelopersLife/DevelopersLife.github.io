"use strict";
(() => {
var exports = {};
exports.id = 121;
exports.ids = [121];
exports.modules = {

/***/ 6710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { email  } = req.body;
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    try {
        const API_URL = process.env.EMAILOCTOPUS_API_URL;
        const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
        const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;
        const data = {
            email_address: email,
            api_key: API_KEY
        };
        const API_ROUTE = `${API_URL}lists/${LIST_ID}/contacts`;
        const response = await fetch(API_ROUTE, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        if (response.status >= 400) {
            return res.status(500).json({
                error: `There was an error subscribing to the list.`
            });
        }
        return res.status(201).json({
            error: ""
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message || error.toString()
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6710));
module.exports = __webpack_exports__;

})();