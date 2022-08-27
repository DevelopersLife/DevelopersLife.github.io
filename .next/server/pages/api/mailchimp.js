"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 7368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mailchimp)
});

;// CONCATENATED MODULE: external "@mailchimp/mailchimp_marketing"
const mailchimp_marketing_namespaceObject = require("@mailchimp/mailchimp_marketing");
var mailchimp_marketing_default = /*#__PURE__*/__webpack_require__.n(mailchimp_marketing_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/mailchimp.js

mailchimp_marketing_default().setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const mailchimp = (async (req, res)=>{
    const { email  } = req.body;
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    try {
        const test = await mailchimp_marketing_default().lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "subscribed"
        });
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
var __webpack_exports__ = (__webpack_exec__(7368));
module.exports = __webpack_exports__;

})();