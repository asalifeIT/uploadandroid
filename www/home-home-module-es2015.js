(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"util.openSideMenu()\">\r\n        <ion-icon name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-label color=\"light\">\r\n      Menu Dashboard\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\" color=\"light\">\r\n      <ion-icon (click)=\"logout()\" name=\"power-sharp\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-item>\r\n </ion-header>\r\n\r\n <ion-content [fullscreen]=\"true\" color=\"light\">\r\n  <div class=\"main-header\"></div>\r\n    <ion-grid>\r\n    <ion-note color=\"light\" class=\"ion-margin-start\">\r\n      ASA SERVICE \r\n         </ion-note><br>\r\n         <ion-note color=\"light\" class=\"ion-margin-start\">\r\n        Selamat datang! {{Username}}\r\n             </ion-note>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-label>  \r\n          <ion-note color=\"light\" class=\"ion-margin-start\">\r\n          </ion-note>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-margin-horizontal ion-margin-top\">\r\n            <ion-col>\r\n        <ion-label color=\"light\">\r\n          <b></b>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-margin-horizontal\">\r\n      <ion-col *ngFor=\"let item of features\" size=\"6\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-header>\r\n            <div align=\"center\"  (click)=\"openRest()\" >\r\n              <ion-thumbnail [style.background]=\"item?.background\">\r\n                <img [src]=\"item?.src\" />\r\n              </ion-thumbnail>\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-label color=\"dark\">{{ item?.name }}</ion-label>\r\n           </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col *ngFor=\"let item of laundry\" size=\"6\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-header>\r\n            <div align=\"center\"(click)=\"openLaundry()\" >\r\n              <ion-thumbnail [style.background]=\"item?.background\">\r\n                <img [src]=\"item?.src\" />\r\n              </ion-thumbnail>\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-label color=\"dark\">{{ item?.name }}</ion-label>\r\n             </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col *ngFor=\"let item of housekeeping\" size=\"6\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-header>\r\n            <div align=\"center\"(click)=\"openHkeeping()\" >\r\n              <ion-thumbnail [style.background]=\"item?.background\">\r\n                <img [src]=\"item?.src\" />\r\n              </ion-thumbnail>\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-label color=\"dark\">{{ item?.name }}</ion-label>\r\n             </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col *ngFor=\"let item of admaintan\" size=\"6\">\r\n        <ion-card class=\"ion-text-center\">\r\n          <ion-card-header>\r\n            <div align=\"center\"(click)=\"openAdmaintan()\" >\r\n              <ion-thumbnail [style.background]=\"item?.background\">\r\n                <img [src]=\"item?.src\" />\r\n              </ion-thumbnail>\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-label color=\"dark\">{{ item?.name }}</ion-label>\r\n             </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: transparent;\n}\nion-header ion-label {\n  font-size: 10px;\n  font-family: \"regular\";\n}\nion-header ion-item {\n  --background: transparent;\n}\nion-header ion-item ion-avatar {\n  background: transparent;\n}\nion-content * {\n  font-family: \"regular\";\n}\nion-content .main-header {\n  height: 55vh;\n  width: 150%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -14vh;\n  margin-top: -60px;\n}\nion-content ion-icon {\n  width: 5px;\n  height: 5px;\n}\nion-content ion-note {\n  font-family: \"regular\";\n  font-size: 12px;\n  margin-left: 10vh;\n}\nion-content ion-grid {\n  width: 100%;\n  position: absolute;\n  top: 45px;\n  left: 0;\n  transform: translateY(10vh);\n  padding-bottom: 8vh;\n}\nion-content ion-grid ion-row ion-col ion-label ion-note {\n  font-size: 0.4rem;\n}\nion-content ion-grid ion-row ion-col ion-label ion-chip ion-label {\n  font-size: rem;\n  font-weight: regular;\n  letter-spacing: 0.5px;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-label b {\n  font-size: 0.5rem;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  height: 3em !important;\n  transform: translateY(10%);\n  text-transform: none;\n}\nion-content ion-grid ion-row ion-col ion-button ion-text {\n  font-size: 0.5rem;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-button ion-icon {\n  font-size: 1rem;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  box-shadow: -1px 11px 10px -6px #206eeb;\n  border-radius: 10px !important;\n  margin: 5px 5px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail {\n  width: 10vh;\n  height: 10vh;\n  border-radius: 10px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail img {\n  width: 10vh;\n  height: 10vh;\n  transform: translateY(10%);\n}\nion-content ion-grid ion-row ion-col ion-card ion-card-content ion-label {\n  font-weight: \"regular\";\n  font-size: 15px;\n  letter-spacing: 0.1px;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-list {\n  background: transparent;\n}\nion-content ion-grid ion-list ion-item {\n  width: 95%;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 2vh;\n}\nion-content ion-grid ion-list ion-item p {\n  font-size: 0.65rem;\n}\nion-content ion-grid ion-list ion-item ion-text {\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcbmV3YXNhZmluYWxcXGFzYXNlcnZhbmRyb2lkL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLHVCQUFBO0FDSEY7QURERTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0dKO0FEQUU7RUFDRSx5QkFBQTtBQ0VKO0FEREk7RUFDRSx1QkFBQTtBQ0dOO0FER0U7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdHQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNGSjtBRE9BO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDTko7QURVVztFQUNDLGlCQUFBO0FDUlo7QURXWTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUNUZDtBRFlVO0VBQ0UsaUJBQUE7QUNWWjtBRGFRO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FDWFY7QURZVTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBQ1ZaO0FEWVU7RUFDRSxlQUFBO0FDVlo7QURhUTtFQUNFLHVDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDWFY7QURZVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNWWjtBRFdZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1RkO0FEYVk7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FDWGQ7QURpQkk7RUFDRSx1QkFBQTtBQ2ZOO0FEZ0JNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZFI7QURlUTtFQUNFLGtCQUFBO0FDYlY7QURlUTtFQUNFLGdCQUFBO0FDYlYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICoge1xyXG4gICAgZm9udC1mYW1pbHk6XCJyZWd1bGFyXCI7XHJcbiAgfVxyXG5cclxuICAubWFpbi1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1NXZoO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMTAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTR2aDtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDo1cHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG5pb24tbm90ZXtcclxuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OjEwdmg7XHJcbn1cclxuXHJcbiAgaW9uLWdyaWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDh2aDtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiByZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogM2VtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDExcHggMTBweCAtNnB4IHJnYigzMiwgMTEwLCAyMzUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xyXG4gICAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwdmg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMHZoO1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogXCJyZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudCAqIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiA1NXZoO1xuICB3aWR0aDogMTUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDEwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICBtYXJnaW4tbGVmdDogLTE0dmg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWljb24ge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHZoO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcbiAgcGFkZGluZy1ib3R0b206IDh2aDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgaW9uLW5vdGUge1xuICBmb250LXNpemU6IDAuNHJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiByZW07XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgYiB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAtMXB4IDExcHggMTBweCAtNnB4ICMyMDZlZWI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTB2aDtcbiAgaGVpZ2h0OiAxMHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let HomePage = class HomePage {
    constructor(loadingController, serviceService, router, util) {
        this.loadingController = loadingController;
        this.serviceService = serviceService;
        this.router = router;
        this.util = util;
        this.features = [
            { id: 1, name: 'Catering', src: 'assets/svg/dining.svg', background: '', page: '' },
        ];
        this.laundry = [
            { id: 1, name: 'Laundry', src: 'assets/svg/washing-machine.svg', background: '', page: '' },
        ];
        this.housekeeping = [
            { id: 1, name: 'House Keeping', src: 'assets/svg/handyman.svg', background: '', page: '' },
        ];
        this.admaintan = [
            { id: 1, name: 'Maintenance', src: 'assets/svg/builder.svg', background: '', page: '' },
        ];
    }
    ngOnInit() {
        //ambil data dari localstorage
        let dataStorage = JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY));
        // this.Username=dataStorage.data.Username;
        this.serviceService.CekUser().subscribe(data => {
            this.DataLogin = data;
            console.log(this.DataLogin);
            this.Username = this.DataLogin.body.name;
        }, error => {
            console.log("error");
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            localStorage.clear();
            this.serviceService.logout();
            loading.dismiss();
        });
    }
    openRest() {
        this.router.navigate(['catering']);
    }
    openHkeeping() {
        this.router.navigate(['housekeeping']);
    }
    openLaundry() {
        this.router.navigate(['aduanlaundry']);
    }
    openAdmaintan() {
        this.router.navigate(['aduanmaintenance']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map