"use strict";
(() => {
var exports = {};
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 9404:
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
        const API_KEY = process.env.KLAVIYO_API_KEY;
        const LIST_ID = process.env.KLAVIYO_LIST_ID;
        const response = await fetch(`https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${API_KEY}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            // You can add additional params here i.e. SMS, etc.
            // https://developers.klaviyo.com/en/reference/subscribe
            body: JSON.stringify({
                profiles: [
                    {
                        email: email
                    }
                ]
            })
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
var __webpack_exports__ = (__webpack_exec__(9404));
module.exports = __webpack_exports__;

})();