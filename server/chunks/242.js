exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 3386:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 5404:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3430))

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ cascade_menus)
/* harmony export */ });
const cascade_menus = [
    {
        "name": "About Me",
        "description": "me, myself, and I",
        "imageSrc": "/about.svg",
        "imageAlt": "",
        "href": "about",
        "active": true
    },
    // {
    //     "name": "Work",
    //     "description": "all the works",
    //     "imageSrc": "/resume.svg",
    //     "imageAlt": "",
    //     "href": "work",
    //     "active": true
    // },
    {
        "name": "Projects",
        "description": "personal, highlights, github stuff",
        "imageSrc": "/projects.svg",
        "imageAlt": "",
        "href": "projects",
        "active": true
    },
    {
        "name": "Research",
        "description": "publications and the likes",
        "imageSrc": "/research.svg",
        "imageAlt": "",
        "href": "research",
        "active": true
    }
];


/***/ }),

/***/ 3430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PortfolioLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/flowbite-react/lib/cjs/index.js
var cjs = __webpack_require__(9920);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/portfolio/data.tsx
var portfolio_data = __webpack_require__(6313);
;// CONCATENATED MODULE: ./src/app/portfolio/components/navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function CustomNavbar() {
    const [data, setData] = (0,react_.useState)(portfolio_data/* cascade_menus */.i);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar, {
        fluid: true,
        rounded: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar.Brand, {
                href: "#",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "Towhid Logo",
                        className: "mr-3 h-6 sm:h-9",
                        src: "/towhid.webp"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
                        children: "Towhid Absar Chowdhury"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex md:order-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.DarkThemeToggle, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar.Collapse, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Link, {
                        href: "/portfolio",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Home"
                        })
                    }),
                    data.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Link, {
                            href: `/portfolio/${menu.href}`,
                            children: menu.name
                        }, menu.href))
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/portfolio/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function PortfolioLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Flowbite, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CustomNavbar, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 2068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/towhidabsar/Documents/code/towhidabsar.github.io/portfolio/src/app/portfolio/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;