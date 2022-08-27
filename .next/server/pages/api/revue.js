"use strict";
(() => {
var exports = {};
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 256:
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
        const API_KEY = process.env.REVUE_API_KEY;
        const revueRoute = `${process.env.REVUE_API_URL}subscribers`;
        const response = await fetch(revueRoute, {
            method: "POST",
            headers: {
                Authorization: `Token ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                double_opt_in: false
            })
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
var __webpack_exports__ = (__webpack_exec__(256));
module.exports = __webpack_exports__;

})();