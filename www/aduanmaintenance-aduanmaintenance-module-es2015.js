(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aduanmaintenance-aduanmaintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aduanmaintenance/aduanmaintenance.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduanmaintenance/aduanmaintenance.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>aduanmaintenance</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/aduanmaintenance/aduanmaintenance-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/aduanmaintenance/aduanmaintenance-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AduanmaintenancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AduanmaintenancePageRoutingModule", function() { return AduanmaintenancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aduanmaintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aduanmaintenance.page */ "./src/app/aduanmaintenance/aduanmaintenance.page.ts");




const routes = [
    {
        path: '',
        component: _aduanmaintenance_page__WEBPACK_IMPORTED_MODULE_3__["AduanmaintenancePage"]
    }
];
let AduanmaintenancePageRoutingModule = class AduanmaintenancePageRoutingModule {
};
AduanmaintenancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AduanmaintenancePageRoutingModule);



/***/ }),

/***/ "./src/app/aduanmaintenance/aduanmaintenance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/aduanmaintenance/aduanmaintenance.module.ts ***!
  \*************************************************************/
/*! exports provided: AduanmaintenancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AduanmaintenancePageModule", function() { return AduanmaintenancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _aduanmaintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aduanmaintenance-routing.module */ "./src/app/aduanmaintenance/aduanmaintenance-routing.module.ts");
/* harmony import */ var _aduanmaintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aduanmaintenance.page */ "./src/app/aduanmaintenance/aduanmaintenance.page.ts");







let AduanmaintenancePageModule = class AduanmaintenancePageModule {
};
AduanmaintenancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _aduanmaintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["AduanmaintenancePageRoutingModule"]
        ],
        declarations: [_aduanmaintenance_page__WEBPACK_IMPORTED_MODULE_6__["AduanmaintenancePage"]]
    })
], AduanmaintenancePageModule);



/***/ }),

/***/ "./src/app/aduanmaintenance/aduanmaintenance.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/aduanmaintenance/aduanmaintenance.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkdWFubWFpbnRlbmFuY2UvYWR1YW5tYWludGVuYW5jZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/aduanmaintenance/aduanmaintenance.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/aduanmaintenance/aduanmaintenance.page.ts ***!
  \***********************************************************/
/*! exports provided: AduanmaintenancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AduanmaintenancePage", function() { return AduanmaintenancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AduanmaintenancePage = class AduanmaintenancePage {
    constructor() { }
    ngOnInit() {
    }
};
AduanmaintenancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aduanmaintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aduanmaintenance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aduanmaintenance/aduanmaintenance.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aduanmaintenance.page.scss */ "./src/app/aduanmaintenance/aduanmaintenance.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AduanmaintenancePage);



/***/ })

}]);
//# sourceMappingURL=aduanmaintenance-aduanmaintenance-module-es2015.js.map