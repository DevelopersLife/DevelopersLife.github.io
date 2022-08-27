"use strict";
(() => {
var exports = {};
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { email  } = req.body;
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    try {
        const FORM_ID = process.env.CONVERTKIT_FORM_ID;
        const API_KEY = process.env.CONVERTKIT_API_KEY;
        const API_URL = process.env.CONVERTKIT_API_URL;
        // Send request to ConvertKit
        const data = {
            email,
            api_key: API_KEY
        };
        const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        if (response.status >= 400) {
            return res.status(400).json({
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
var __webpack_exports__ = (__webpack_exec__(215));
module.exports = __webpack_exports__;

})();