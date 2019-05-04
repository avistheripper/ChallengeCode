(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/components/stats/stats.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'details/:id',
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'stats',
        component: _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUserStatus().subscribe(function (res) { return _this.isAuth = res; });
        if (!this.isAuth) {
            this.router.navigate(['/login']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm5/ngx-monaco-editor.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _inerceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inerceptor/auth.interceptor */ "./src/app/inerceptor/auth.interceptor.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/components/stats/stats.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_15__["StatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"].forRoot()
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _inerceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["HttpConfigInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"task\" class=\"body-blur task-details\">\n    <h4 class=\"task-details__title\">{{ task.name  }}</h4>\n    <div class=\"loader\" *ngIf=\"loading\">\n      <h3>Running tests...</h3>\n    </div>\n  <div class=\"row\">\n    <div class=\"columns small-1 medium-1\">\n      <a routerLink=\"/\" id=\"back\">Back</a>\n    </div>\n    <div class=\"columns small-11 medium-11 description\">\n      <p>\n        {{ task.taskDescription }}\n      </p>\n    </div>\n  </div>\n  <div class=\"row columns\">\n    <ngx-monaco-editor\n      *ngIf=\"!testFinished\"\n      class=\"my-code-editor\"\n      [options]=\"editorOptions\"\n      [(ngModel)]=\"code\"\n    ></ngx-monaco-editor>\n\n    <div class=\"jumbotron results-window\"\n         *ngIf=\"testFinished && testResult === 'success'\">\n      <h1 class=\"display-4\">Good job!</h1>\n      <p class=\"lead\">All the tests for this task has succesfullty been passed!</p>\n      <hr class=\"my-4\">\n      <p>Keep on moving!</p>\n      <p class=\"lead\">\n        <button class=\"cta-btn btn-lg btn-left\" routerLink=\"/\" role=\"button\">Back to task list</button>\n      </p>\n    </div>\n\n    <div class=\"jumbotron results-window--fail\"\n         *ngIf=\"testFinished && testResult === 'syntax' || testResult === 'failure'\">\n      <h1 class=\"display-4\">Oops! There might be a mistake in your code</h1>\n      <p class=\"lead\">Make sure sure you're doing it right!</p>\n      <hr class=\"my-4\">\n      <p>Try it again</p>\n      <p class=\"lead\">\n        <button class=\"cta-btn btn-lg btn-left\" (click)=\"refreshTask()\" role=\"button\">One more time</button>\n      </p>\n    </div>\n\n  </div>\n  <div class=\"row columns\" *ngIf=\"!testFinished\">\n    <button\n      (click)=\"onSubmit()\"\n      class=\"cta-btn btn-block\"\n      [disabled]=\"loading\"\n      >\n      Submit for testing!\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-details__title {\n  width: 100%;\n  text-align: center; }\n\np {\n  font-size: 1.5em; }\n\nh4 {\n  text-align: center;\n  color: #fff;\n  width: 50%;\n  border-bottom: 1px solid #00E4AC; }\n\n.my-code-editor {\n  height: 350px; }\n\na#back {\n  line-height: 80px;\n  background-color: transparent;\n  width: 80px;\n  display: block;\n  color: #00E4AC;\n  text-align: center;\n  border: 1px solid #00E4AC;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 5px; }\n\na#back:hover {\n    color: #2A3136;\n    background-color: #00E4AC; }\n\n.my-code-editor .editorContainer {\n  height: calc(100vh - 100px); }\n\n.btn-block {\n  width: 100%;\n  text-align: center;\n  font-size: 20px; }\n\n.results-window {\n  background: #7fffd445; }\n\n.results-window--fail {\n    background: #ff7f854f; }\n\n.btn-left {\n  float: left; }\n\n@-webkit-keyframes load {\n  0% {\n    opacity: 0.08;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n    letter-spacing: 3px; }\n  100% {\n    /*         opacity: 1; */\n    /*         font-size: 12px; */\n    /* \t\t\t\tfont-weight:600; */\n    /* \t\t\t\tfilter: blur(0); */ } }\n\n@keyframes load {\n  0% {\n    opacity: 0.08;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n    letter-spacing: 3px; }\n  100% {\n    /*         opacity: 1; */\n    /*         font-size: 12px; */\n    /* \t\t\t\tfont-weight:600; */\n    /* \t\t\t\tfilter: blur(0); */ } }\n\n.loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin: auto;\n  font-family: Helvetica, sans-serif, Arial;\n  -webkit-animation: load 1.2s infinite 0s ease-in-out;\n          animation: load 1.2s infinite 0s ease-in-out;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  text-shadow: 0 0 1px white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlzdGhlcmlwcGVyL0Rlc2t0b3AvQ29kZV9jaGFsbGVuZ2UvQ2hhbGxlbmdlQ29kZS9zcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBVztFQUNYLG1CQUFrQixFQUNuQjs7QUFHSDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGlDQUFnQyxFQUVqQzs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQiw4QkFBNkI7RUFDN0IsWUFBVztFQUNYLGVBQWM7RUFDZCxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLG1CQUFrQixFQUtyQjs7QUFmRDtJQVlNLGVBQWM7SUFDZCwwQkFBeUIsRUFDMUI7O0FBR0w7RUFFTSw0QkFBMkIsRUFDNUI7O0FBRUw7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0Usc0JBQXFCLEVBSXRCOztBQUhDO0lBQ0Usc0JBQXFCLEVBQ3RCOztBQUVIO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0U7SUFDSSxjQUFhO0lBQ2IsMEJBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFBQTtFQUV2QjtJQUNGLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDBCQUEwQixFQUFBLEVBQUE7O0FBVjFCO0VBQ0U7SUFDSSxjQUFhO0lBQ2IsMEJBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFBQTtFQUV2QjtJQUNGLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDBCQUEwQixFQUFBLEVBQUE7O0FBSTFCO0VBQ0UsY0FBWTtFQUNaLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsYUFBVztFQUNYLGFBQVk7RUFDWiwwQ0FBeUM7RUFDekMscURBQTRDO1VBQTVDLDZDQUE0QztFQUM1Qyx1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQzlCLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stZGV0YWlscyB7XG4gICZfX3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwRTRBQztcblxufVxuLm15LWNvZGUtZWRpdG9yIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbmEjYmFjayB7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMEU0QUM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEU0QUM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzJBMzEzNjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEU0QUM7XG4gICAgfVxufVxuXG4ubXktY29kZS1lZGl0b3Ige1xuICAgIC5lZGl0b3JDb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIH1cbiAgfVxuLmJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yZXN1bHRzLXdpbmRvdyB7XG4gIGJhY2tncm91bmQ6ICM3ZmZmZDQ0NTtcbiAgJi0tZmFpbHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY3Zjg1NGY7XG4gIH1cbn1cbi5idG4tbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWQge1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjA4O1xuICAgICAgZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgfVxuICAxMDAlIHtcbi8qICAgICAgICAgb3BhY2l0eTogMTsgKi9cbi8qICAgICAgICAgZm9udC1zaXplOiAxMnB4OyAqL1xuLyogXHRcdFx0XHRmb250LXdlaWdodDo2MDA7ICovXG4vKiBcdFx0XHRcdGZpbHRlcjogYmx1cigwKTsgKi9cbiAgICAgIH1cbn1cblxuLmxvYWRlciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDoxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIEFyaWFsO1xuICBhbmltYXRpb246IGxvYWQgMS4ycyBpbmZpbml0ZSAwcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_config_editor_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/editor-config */ "./src/app/config/editor-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(taskService, route) {
        this.taskService = taskService;
        this.route = route;
        this.testFinished = false;
        this.editorOptions = src_app_config_editor_config__WEBPACK_IMPORTED_MODULE_5__["editorConfig"];
        this.solution$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.taskId = params['id'];
            _this.taskService.getTask(_this.taskId)
                .subscribe(function (res) {
                _this.task = res;
                _this.code = _this.task.code;
            });
        });
        this.initPolling();
    };
    DetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.taskService.submitTask(this.taskId, this.code)
            .subscribe(function (res) {
            _this.testId = res.sid;
            _this.solution$.next(_this.code);
            _this.loading = true;
        });
    };
    DetailsComponent.prototype.initPolling = function () {
        var _this = this;
        this.solution$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (query) { return _this.taskService.getSolutionStatus(_this.taskId, _this.testId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeat"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchAll"])())
            .subscribe(function (res) {
            switch (res.status) {
                case 'tested':
                    _this.testFinished = true;
                    _this.loading = false;
                    _this.testResult = 'success';
                    break;
                case 'terminated':
                    _this.testFinished = true;
                    _this.loading = false;
                    _this.testResult = 'failure';
                    break;
                case 'error':
                    _this.testFinished = true;
                    _this.loading = false;
                    _this.testResult = 'syntax';
                    break;
                default:
                    _this.solution$.next(_this.code);
            }
        });
    };
    DetailsComponent.prototype.refreshTask = function () {
        this.testFinished = false;
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns small-12 medium-6 large-4 tasks\" *ngFor=\"let task of tasks\">\n    <div class=\"task-container\">\n      <div class=\"row\">\n        <div class=\"coulmns small-12 large-10\">\n          <a routerLink=\"/details/{{ task.id }}\" class=\"task-title\">{{ task.name }}</a>\n        </div>\n        <div class=\"coulmns small-12 large-2 show-for-large\">\n          <a href=\"#\" target=\"_blank\" class=\"external\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              viewBox=\"0 0 96.8 96.8\" style=\"enable-background:new 0 0 96.8 96.8;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n              .st0{fill:#00E4AC;}\n              .st1{fill:#2A3136;}\n            </style>\n            <circle class=\"st0\" cx=\"48.4\" cy=\"48.4\" r=\"48.4\"/>\n            <polygon class=\"st1\" points=\"60.4,25.6 44.2,25.6 33.1,36.2 51.4,36.2 21.7,70.8 36,70.8 60.4,42.3 60.4,63.3 71,50.9 71,36.2\n              71,25.6 \"/>\n            </svg>\n          </a>\n        </div>\n      </div>\n      <p>{{ task.shortDescription }}</p>\n      <a routerLink=\"/details/{{ task.id }}\" class=\"cta-btn btn2\">Get started</a>\n      <span class=\"level-badge\">Complexity: {{ task.difficulty | uppercase }}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-container {\n  background-color: #363E45;\n  padding: 24px;\n  border-radius: 20px;\n  margin-bottom: 30px;\n  height: 100%;\n  position: relative; }\n  .task-container p {\n    margin: 18px 0 24px 0; }\n  .level-badge {\n  position: absolute;\n  right: 10%;\n  font-weight: bold; }\n  .task-title {\n  font-size: 1.4em;\n  display: block;\n  padding: 0 20px; }\n  .tasks {\n  margin-bottom: 30px; }\n  .btn2 {\n  float: none;\n  position: absolute;\n  bottom: 24px; }\n  .external svg {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  max-width: none;\n  left: 34px;\n  transition: -webkit-transform .4s ease-in-out;\n  transition: transform .4s ease-in-out;\n  transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out; }\n  .external svg:hover {\n    transform: rotate(50deg);\n    -ms-transform: rotate(50deg);\n    -webkit-transform: rotate(50deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlzdGhlcmlwcGVyL0Rlc2t0b3AvQ29kZV9jaGFsbGVuZ2UvQ2hhbGxlbmdlQ29kZS9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixtQkFBa0IsRUFJckI7RUFWRDtJQVFRLHNCQUFxQixFQUN4QjtFQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7RUFFRDtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2Y7RUFFRDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsV0FBVTtFQUdWLDhDQUFxQztFQUFyQyxzQ0FBcUM7RUFBckMseUVBQXFDLEVBTXhDO0VBZEQ7SUFVUSx5QkFBdUI7SUFDdkIsNkJBQTJCO0lBQzNCLGlDQUErQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzRTQ1O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMThweCAwIDI0cHggMDtcbiAgICB9XG59XG5cbi5sZXZlbC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnRhc2tzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYnRuMiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjRweDtcbn1cblxuLmV4dGVybmFsIHN2ZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbGVmdDogMzRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLWluLW91dDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg1MGRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDUwZGVnKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDUwZGVnKTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(taskService) {
        this.taskService = taskService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGV2LXVzZXIifQ.P4Yfr-EQD-5N-bp6o0gBJbhApTt6w7BJdET8yQeuSqw');
        this.taskSubscription = this.taskService.getTasks().subscribe(function (res) {
            _this.tasks = res;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.taskSubscription.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <h2>Login</h2>\n<form  [formGroup]=\"loginForm\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Pick username!</label>\n    <input\n      type=\"email\"\n      class=\"form-control\"\n      id=\"exampleInputEmail1\"\n      aria-describedby=\"emailHelp\"\n      placeholder=\"Enter Username\"\n      formControlName=\"username\"\n      >\n  </div>\n  <button class=\"login-btn\" (click)=\"onLogin()\" [disabled]=\"loginForm.pristine || loginForm.invalid\">\n    Submit\n  </button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  border: 1px solid #00E4AC;\n  color: #00E4AC;\n  margin-left: 25%;\n  border-radius: 20px;\n  padding: 18px 24px;\n  width: 50%; }\n  .login-container .login-btn {\n    background-color: transparent;\n    margin-left: 30%;\n    width: 180px;\n    display: block;\n    border-radius: 12px;\n    color: #00E4AC;\n    text-align: center;\n    border: 1px solid #00E4AC;\n    text-transform: uppercase;\n    margin-bottom: 5px; }\n  .login-container .login-btn:hover {\n      color: #2A3136;\n      background-color: #00E4AC; }\n  .login-container label {\n    color: #00E4AC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlzdGhlcmlwcGVyL0Rlc2t0b3AvQ29kZV9jaGFsbGVuZ2UvQ2hhbGxlbmdlQ29kZS9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFdBQVUsRUFxQmI7RUEzQkQ7SUFTUSw4QkFBNkI7SUFDN0IsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLDBCQUF5QjtJQUN6QixtQkFBa0IsRUFLckI7RUF2Qkw7TUFvQlksZUFBYztNQUNkLDBCQUF5QixFQUM1QjtFQXRCVDtJQXlCUSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEU0QUM7XG4gICAgY29sb3I6ICMwMEU0QUM7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDE4cHggMjRweDtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgLmxvZ2luLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzAwRTRBQztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBFNEFDO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyQTMxMzY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBFNEFDO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMwMEU0QUM7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        this.loginService.userLogin(this.loginForm.value.username);
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n  <div class=\"columns small-12 medium-3\">\n      <a routerLink=\"/\" class=\"logo\">\n        code challenge\n      </a>\n  </div>\n  <div class=\"columns small-12 medium-6\">\n    <a routerLink=\"/stats\" class=\"logo\">\n      Stats\n    </a>\n  </div>\n  <div class=\"columns small-12 medium-3\">\n      <a routerLink=\"/stats\" (click)=\"onLogout()\" class=\"logo logout\">\n        Logout\n      </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 30px 20px;\n  margin-bottom: 18px; }\n\n.logo {\n  font-size: 20px;\n  text-transform: uppercase;\n  color: aliceblue; }\n\n.logo:hover {\n    color: #00E4AC;\n    text-decoration: none; }\n\n.logout {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlzdGhlcmlwcGVyL0Rlc2t0b3AvQ29kZV9jaGFsbGVuZ2UvQ2hhbGxlbmdlQ29kZS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixpQkFBZ0IsRUFLbkI7O0FBUkQ7SUFLUSxlQUFjO0lBQ2Qsc0JBQXFCLEVBQ3hCOztBQUdMO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwRTRBQztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxuLmxvZ291dCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(loginService) {
        this.loginService = loginService;
    }
    NavComponent.prototype.onLogout = function () {
        this.loginService.userLogout();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/stats/stats.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stats/stats.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"stat__title\">Solution statistics for <span class=\"badge badge-info\"> {{ user }}</span></h4>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let stat of ($taskStats | async)\" class=\"list-group-item\">\n      <h4 class=\"stat__task-name\">Task name</h4>\n      <hr>\n      <span>Code to execute:</span> <p class=\"stat__code\">\n         {{ stat.code }}\n      </p>\n        <ul class=\"stat__test-results\">\n          <li *ngFor=\"let test of stat.results\">\n            Test run result: {{ test.status | uppercase }}\n          </li>\n        </ul>\n            <span class=\"badge badge-pill badge-success stat__score\">Score: {{stat.score}} out of a 10</span>\n    </li>\n  </ul>\n  </div>"

/***/ }),

/***/ "./src/app/components/stats/stats.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/stats/stats.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stat__title {\n  padding: 12px 24px 12px 24px; }\n\n.stat__score {\n  float: right; }\n\n.stat__code {\n  background: #2A3136;\n  color: aliceblue;\n  padding: 6px;\n  font-weight: bold; }\n\n.stat__test-results {\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlzdGhlcmlwcGVyL0Rlc2t0b3AvQ29kZV9jaGFsbGVuZ2UvQ2hhbGxlbmdlQ29kZS9zcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxzQkFBcUIsRUFFeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXQge1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjRweDtcbiAgICB9XG4gICAgJl9fc2NvcmUge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgICZfX2NvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMkEzMTM2O1xuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAmX190ZXN0LXJlc3VsdHMge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/stats/stats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent(taskService) {
        this.taskService = taskService;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.$taskStats = this.taskService.getStats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (stat) { return stat; }));
        var userName = localStorage.getItem('username');
        if (userName) {
            this.user = userName;
        }
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/components/stats/stats.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/config/editor-config.ts":
/*!*****************************************!*\
  !*** ./src/app/config/editor-config.ts ***!
  \*****************************************/
/*! exports provided: editorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorConfig", function() { return editorConfig; });
var editorConfig = {
    theme: 'vs-dark',
    language: 'javascript',
    fontSize: '20px',
    height: '300px'
};


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService) {
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.loginService.getUserStatus();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/inerceptor/auth.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/inerceptor/auth.interceptor.ts ***!
  \************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor() {
    }
    HttpConfigInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('event--->>>', event);
            }
            return event;
        }));
    };
    HttpConfigInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isAuth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isAuthenticated());
    }
    LoginService.prototype.userLogin = function (user) {
        localStorage.setItem('username', user);
        this.isAuth.next(true);
    };
    LoginService.prototype.userLogout = function () {
        localStorage.removeItem('username');
        this.isAuth.next(false);
    };
    LoginService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('username');
    };
    LoginService.prototype.getUserStatus = function () {
        return this.isAuth;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiEndPoint = 'api/v1';
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(apiEndPoint + "/tasks?page=1");
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(apiEndPoint + "/tasks/" + id);
    };
    TaskService.prototype.getStats = function () {
        return this.http.get(apiEndPoint + "/stats/rankings");
        //   return of([
        //   {
        //     date: '25-09-2019',
        //     time: 1231232,
        //     task: 'Love triangle',
        //     score: 5
        //   },
        //   {
        //     date: '25-09-2019',
        //     time: 22333,
        //     task: 'Temperature switch',
        //     score: 1
        //   }
        // ]);
    };
    TaskService.prototype.submitTask = function (id, code) {
        return this.http.post(apiEndPoint + "/tasks/" + id + "/submit", { code: code });
    };
    TaskService.prototype.getSolutionStatus = function (id, sid) {
        return this.http.get(apiEndPoint + "/tasks/" + id + "/status/" + sid);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/avistheripper/Desktop/Code_challenge/ChallengeCode/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map