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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Directives/number-validator.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/Directives/number-validator.directive.ts ***!
  \**********************************************************/
/*! exports provided: NumberValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidatorDirective", function() { return NumberValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberValidatorDirective = /** @class */ (function () {
    function NumberValidatorDirective() {
    }
    NumberValidatorDirective_1 = NumberValidatorDirective;
    NumberValidatorDirective.prototype.validate = function (control) {
        var elementValue = control.value;
        if (elementValue != null) {
            var str = elementValue.replace(/,/g, '');
            if (isNaN(Number(str))) {
                return { 'cus_num': 'Need to enter numbers' };
            }
        }
    };
    NumberValidatorDirective = NumberValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNumberValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: NumberValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], NumberValidatorDirective);
    return NumberValidatorDirective;
    var NumberValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/Directives/percentage-validator.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/Directives/percentage-validator.directive.ts ***!
  \**************************************************************/
/*! exports provided: PercentageValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageValidatorDirective", function() { return PercentageValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PercentageValidatorDirective = /** @class */ (function () {
    function PercentageValidatorDirective() {
    }
    PercentageValidatorDirective_1 = PercentageValidatorDirective;
    PercentageValidatorDirective.prototype.validate = function (control) {
        var elementValue = control.value;
        if (elementValue < 0 || elementValue > 100) {
            return { 'cus_percentage': 'Need to enter numbers between 0 to 100' };
        }
    };
    PercentageValidatorDirective = PercentageValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPercentageValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PercentageValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], PercentageValidatorDirective);
    return PercentageValidatorDirective;
    var PercentageValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/Directives/property-validator.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/Directives/property-validator.directive.ts ***!
  \************************************************************/
/*! exports provided: PropertyValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyValidatorDirective", function() { return PropertyValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyValidatorDirective = /** @class */ (function () {
    function PropertyValidatorDirective() {
    }
    PropertyValidatorDirective_1 = PropertyValidatorDirective;
    PropertyValidatorDirective.prototype.validate = function (control) {
        if (control.value !== null) {
            var str = control.value.replace(/,/g, '');
            var propertyValue = +str;
            if (propertyValue < this.mortgValue) {
                return { 'cus_value': 'value of mortgage is bigger than property value' };
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PropertyValidatorDirective.prototype, "mortgValue", void 0);
    PropertyValidatorDirective = PropertyValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPropertyValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PropertyValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyValidatorDirective);
    return PropertyValidatorDirective;
    var PropertyValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/Directives/select-input.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/Directives/select-input.directive.ts ***!
  \******************************************************/
/*! exports provided: SelectInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputDirective", function() { return SelectInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectInputDirective = /** @class */ (function () {
    function SelectInputDirective(elementRef) {
        this.elementRef = elementRef;
    }
    SelectInputDirective.prototype.ngOnInit = function () {
        if (this.selectFlag === true) {
            this.elementRef.nativeElement.focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectInputDirective.prototype, "selectFlag", void 0);
    SelectInputDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSelectInput]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SelectInputDirective);
    return SelectInputDirective;
}());



/***/ }),

/***/ "./src/app/Directives/sum-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/Directives/sum-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: SumValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumValidatorDirective", function() { return SumValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SumValidatorDirective = /** @class */ (function () {
    function SumValidatorDirective() {
    }
    SumValidatorDirective_1 = SumValidatorDirective;
    SumValidatorDirective.prototype.validate = function (control) {
        if (control.value !== null) {
            var str = control.value.replace(/,/g, '');
            var elementValue = +str;
            var sum = 0;
            for (var i = 0; i < this.indx; i++) {
                sum = sum + this.mPlans[i].sum;
            }
            sum = sum + elementValue;
            if (sum > this.mSum) {
                return { 'cus_sum': 'sum of plans is bigger than mortgage sum' };
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SumValidatorDirective.prototype, "mPlans", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SumValidatorDirective.prototype, "mSum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SumValidatorDirective.prototype, "indx", void 0);
    SumValidatorDirective = SumValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSumValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: SumValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], SumValidatorDirective);
    return SumValidatorDirective;
    var SumValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-main-title></app-main-title>\n<app-data-form></app-data-form>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_addCommasToNum_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/addCommasToNum.pipe */ "./src/app/pipes/addCommasToNum.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _main_title_main_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-title/main-title.component */ "./src/app/main-title/main-title.component.ts");
/* harmony import */ var _components_data_form_data_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/data-form/data-form.component */ "./src/app/components/data-form/data-form.component.ts");
/* harmony import */ var _Directives_percentage_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Directives/percentage-validator.directive */ "./src/app/Directives/percentage-validator.directive.ts");
/* harmony import */ var _Directives_select_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Directives/select-input.directive */ "./src/app/Directives/select-input.directive.ts");
/* harmony import */ var _Directives_number_validator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Directives/number-validator.directive */ "./src/app/Directives/number-validator.directive.ts");
/* harmony import */ var _Directives_sum_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Directives/sum-validator.directive */ "./src/app/Directives/sum-validator.directive.ts");
/* harmony import */ var _Directives_property_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Directives/property-validator.directive */ "./src/app/Directives/property-validator.directive.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_7__["BottomComponent"],
                _main_title_main_title_component__WEBPACK_IMPORTED_MODULE_8__["MainTitleComponent"],
                _components_data_form_data_form_component__WEBPACK_IMPORTED_MODULE_9__["DataFormComponent"],
                _Directives_percentage_validator_directive__WEBPACK_IMPORTED_MODULE_10__["PercentageValidatorDirective"],
                _Directives_select_input_directive__WEBPACK_IMPORTED_MODULE_11__["SelectInputDirective"],
                _pipes_addCommasToNum_pipe__WEBPACK_IMPORTED_MODULE_4__["AddCommas"],
                _Directives_number_validator_directive__WEBPACK_IMPORTED_MODULE_12__["NumberValidatorDirective"],
                _Directives_sum_validator_directive__WEBPACK_IMPORTED_MODULE_13__["SumValidatorDirective"],
                _Directives_property_validator_directive__WEBPACK_IMPORTED_MODULE_14__["PropertyValidatorDirective"],
                _components_results_results_component__WEBPACK_IMPORTED_MODULE_15__["ResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom/bottom.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottom/bottom.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bottom/bottom.component.html":
/*!**********************************************!*\
  !*** ./src/app/bottom/bottom.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bottom works!\n</p>\n"

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    BottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__(/*! ./bottom.component.html */ "./src/app/bottom/bottom.component.html"),
            styles: [__webpack_require__(/*! ./bottom.component.css */ "./src/app/bottom/bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/classes/mortgagePlane.ts":
/*!******************************************!*\
  !*** ./src/app/classes/mortgagePlane.ts ***!
  \******************************************/
/*! exports provided: MortgageData, MortgagePlan, Plans, Period */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageData", function() { return MortgageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgagePlan", function() { return MortgagePlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plans", function() { return Plans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Period", function() { return Period; });
var MortgageData = /** @class */ (function () {
    function MortgageData() {
        this.plans = [];
    }
    return MortgageData;
}());

var MortgagePlan = /** @class */ (function () {
    function MortgagePlan() {
    }
    return MortgagePlan;
}());

var Plans = [
    'פריים',
    'קבועה לא צמודה',
    'משתנה צמודה',
    'משתנה לא צמודה',
    'קבועה צמודה'
];
var Period = [
    '0 - 10',
    '11 - 15',
    '16 - 20',
    '21 - 30',
];


/***/ }),

/***/ "./src/app/components/data-form/data-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/data-form/data-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    display: flex;\n    flex-direction: column;\n    width: 1000px;\n}\n\n.mainData {\n    display: flex;\n    flex-direction: row;\n    margin-right: auto;\n    margin-left: auto;}\n\n.mainDataPlans {\n    display: flex;\n    flex-direction: row;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.data {\n    width: 450px;\n    box-shadow: 2px 2px 20px hsl(0, 0%, 85%);\n    margin-right: 10px;\n    padding-top: 20px;\n    padding-left: 20px;\n    padding-right: 15px;\n    padding-bottom: 5px;\n    border-radius: 5px;\n}\n\n.dataPlans{\n    width: 450px;\n    box-shadow: 2px 2px 20px hsl(0, 0%, 85%);\n    margin-right: 10px;\n    margin-top: 15px;\n    padding-top: 20px;\n    padding-left: 20px;\n    padding-right: 15px;\n    padding-bottom: 5px;\n    border-radius: 5px;\n}\n\n.sideTilteParent {\n    background-color: lightblue;\n    -webkit-writing-mode: vertical-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: vertical-rl;\n    text-orientation: mixed;\n    text-align: center;\n    width: 40px;\n    box-shadow: 1px 1.5px 5px hsl(0, 0%, 85%);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.sideTilteParentPlans {\n    background-color: lightblue;\n    -webkit-writing-mode: vertical-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: vertical-rl;\n    text-orientation: mixed;\n    text-align: center;\n    width: 40px;\n    box-shadow: 1px 1.5px 6px hsl(0, 0%, 85%);\n    margin: 0px;\n}\n\n.innerContainer {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel, input {\n    display: block;\n}\n\n.btnAddPlan {\n    float: left;\n    margin-top: 20px;\n    width: 120px;\n    margin-left: 2%;\n}\n\ninput {\n    margin-bottom: 10px;\n}\n\nselect {\n    margin-bottom: 10px;\n}\n\n.messageError {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: red;\n}\n\n.buttons {\n    -ms-grid-row-align: end;\n        align-self: end;\n    width: 100%;\n    margin-bottom: 8px;\n}\n\n.btnContinue {\n    float: left;\n    margin-top: 20px;\n    width: 120px;\n}\n\n.btnSub {\n    margin-top: 15px;\n    text-align: center;\n}\n\n.resTitle{\n  color: blue;\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n.imgRes{\n    height: 50px;\n    width: 50px;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/components/data-form/data-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/data-form/data-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"logForm()\">\n    <div class=\"container\">\n        <div class=\"mainData\">\n            <div class=\"sideTilteParent\">\n                <div>שלב 1 פרטים כללים</div>\n            </div>\n            <div class=\"data\">\n                <div class=\"innerContainer\">\n                    <div class=\"inputs\">\n                        <div class=\"form-group\">\n                            <label for=\"Mortgage\">סכום משכנתא</label>\n                            <input class=\"form-control\" type=\"text\" name=\"MortgageSum\" id=\"Mortgage\" ngModel [value]=\"mortgageData.mortgageSum | addCommas\"\n                                (input)=\"mortgageData.mortgageSum=ConvertToNum($event.target.value)\" #MortgageSum=\"ngModel\" appNumberValidator\n                                required>\n                            <div class=\"messageError\" *ngIf=\"MortgageSum.invalid && (MortgageSum.dirty || MortgageSum.touched)\">\n                                <div *ngIf=\"MortgageSum?.errors.required\">\n                                    יש להזין סכום משכנתא.\n                                </div>\n                                <div *ngIf=\"MortgageSum?.errors.cus_num\">\n                                    יש להזין מספרים בלבד.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Prop\">שווי נכס</label>\n                            <input class=\"form-control\" type=\"text\" name=\"PropValue\" ngModel [value]=\"mortgageData.propValue | addCommas\" (input)=\"mortgageData.propValue=ConvertToNum($event.target.value)\"\n                                appPropertyValidator [mortgValue]=\"mortgageData.mortgageSum\" #PropValue=\"ngModel\" id=\"Prop\" appNumberValidator\n                                required>\n                            <div class=\"messageError\" *ngIf=\"PropValue.invalid && (PropValue.dirty || PropValue.touched)\">\n                                <div *ngIf=\"PropValue?.errors.required\">\n                                    יש להזין שווי נכס.\n                                </div>\n                                <div *ngIf=\"PropValue?.errors.cus_num\">\n                                    יש להזין מספרים בלבד.\n                                </div>\n                                <div *ngIf=\"PropValue?.errors.cus_value\">\n                                    ערך הנכס לא יכול להיות נמוך יותר מערך המשכנתא.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Net\">הכנסה נטו</label>\n                            <input class=\"form-control\" type=\"text\" name=\"NetIncome\" ngModel [value]=\"mortgageData.netIncome | addCommas\" (input)=\"mortgageData.netIncome=ConvertToNum($event.target.value)\"\n                                #NetIncome=\"ngModel\" id=\"Net\" appNumberValidator>\n                            <div class=\"messageError\" *ngIf=\"NetIncome.invalid && (NetIncome.dirty || NetIncome.touched)\">\n                                <div *ngIf=\"NetIncome?.errors.cus_num\">\n                                    יש להזין מספרים בלבד.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"buttons\">\n                        <button type=\"button\" class=\"btnContinue btn btn-success btn-sm\" [disabled]=\"(MortgageSum.invalid || PropValue.invalid || NetIncome.invalid)\"\n                            (click)=\"btnAddNewPlan()\">המשך\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"mainDataPlans\" *ngFor=\"let mortgagePlan of mortgageData.plans; let i=index\">\n            <div class=\"sideTilteParentPlans\">\n                <div *ngIf=\"i===0\" class=\"sideTilte\">שלב 2 הרכב משכנתא</div>\n            </div>\n            <div class=\"dataPlans\">\n                <div class=\"innerContainer\">\n                    <div class=\"inputs\">\n                        <div class=\"form-group\">\n                            <label>בחר מסלול</label>\n                            <select class=\"form-control\" name=\"mortgagePlan_{{i}}\" [(ngModel)]=\"mortgagePlan.plan\" #Plan=\"ngModel\" appSelectInput [selectFlag]=\"i === mortgageData.plans.length-1\"\n                                required>\n                                <option *ngFor=\"let plan of MPlans\" [value]=\"plan\">{{plan}}</option>\n                            </select>\n                            <div class=\"messageError\" *ngIf=\"Plan.invalid && (Plan.dirty || Plan.touched)\">\n                                יש צורך להזין מסלול.\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>סכום מסלול</label>\n                            <input class=\"form-control\" type=\"text\" name=\"planSum_{{i}}\" ngModel [value]=\"mortgagePlan.sum | addCommas\" (input)=\"mortgagePlan.sum=ConvertToNum($event.target.value)\"\n                                appSumValidator [indx]=\"i\" [mPlans]=\"mortgageData.plans\" [mSum]=\"mortgageData.mortgageSum\" #MPlanSum=\"ngModel\"\n                                appNumberValidator required>\n                            <div class=\"messageError\" *ngIf=\"MPlanSum.invalid && (MPlanSum.dirty || MPlanSum.touched)\">\n                                <div *ngIf=\"MPlanSum?.errors.required\">\n                                    יש להזין סכום מסלול.\n                                </div>\n                                <div *ngIf=\"MPlanSum?.errors.cus_num\">\n                                    יש להזין מספרים בלבד.\n                                </div>\n                                <div *ngIf=\"MPlanSum?.errors.cus_sum\">\n                                    הסכום הכולל של המסלולים גדול יותר מסכום המשכנתא.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>תקופה בשנים</label>\n                            <select class=\"form-control\" name=\"mortgagePeriod_{{i}}\" [(ngModel)]=\"mortgagePlan.period\" #MPeriod=\"ngModel\" required>\n                                <option *ngFor=\"let p of Period\" [value]=\"p\">{{p}}</option>\n                            </select>\n                            <div class=\"messageError\" *ngIf=\"MPeriod.invalid && (MPeriod.dirty || MPeriod.touched)\">\n                                יש צורך להזין תקופה בשנים.\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>ריבית שהתקבלה עבור המסלול הזה</label>\n                            <input class=\"form-control\" type=\"number\" name=\"interest_{{i}}\" min=\"0\" max=\"100\" [(ngModel)]=\"mortgagePlan.interest\" #MInterest=\"ngModel\"\n                                appPercentageValidator required pattern=\"^[+-]?([0-9]*[.])?[0-9]+$\">\n                            <div class=\"messageError\" *ngIf=\"MInterest.invalid && (MInterest.dirty || MInterest.touched)\">\n                                <div *ngIf=\"MInterest?.errors.required\">\n                                    יש צורך להזין ריבית.\n                                </div>\n                                <div *ngIf=\"MInterest?.errors.pattern\">\n                                    ריבית צריכה לכלול מספרים בלבד.\n                                </div>\n                                <div *ngIf=\"MInterest?.errors.cus_percentage\">\n                                    יש להזין מספר בין 0 ל - 100\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"buttons\">\n                        <button type=\"button\" class=\" btnContinue btn btn-success btn-sm\" [disabled]=\"(Plan.invalid || MPlanSum.invalid || MPeriod.invalid || MInterest.invalid)\"\n                            (click)=\"btnAddNewPlan()\">הוסף מסלול נוסף +\n                        </button>\n                        <button type=\"button\" class=\"btnAddPlan btnContinue btn btn-success btn-sm\" (click)=\"btnRemovePlan(mortgagePlan)\">הסר מסלול\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"mainDataPlans\" *ngIf=\"averageInterest\">\n            <div class=\"sideTilteParentPlans\">\n                <div>מסקנות והמלצות</div>\n            </div>\n            <div class=\"dataPlans\">\n                <div class=\"innerContainer\">\n                    <h2 class=\"resTitle\">כל הכבוד !</h2>\n                    <h5>נראה שההצעה שקיבלתם ???</h5>\n                    <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר\n                        מונפרר סוברט לורם שבצק יהול , לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו\n                        חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא\n                        התידם הכייר וק.\n                    </p>\n                    <hr/>\n                    <h5><img class=\"imgRes\" src=\"../../../assets/summery.jpeg\" width=\"25\" height=\"25\"> סיכום מסלולים:</h5>\n                    <ul>\n                        <li *ngFor=\"let result of averageInterest\">\n                            <span>{{result?.plan}} - </span><span>ריבית ממוצעת :  {{result.average}}</span>\n                            <p>{{result?.result}}</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- <app-results [data]=\"averageInterest\" *ngIf=\"averageInterest\" class=\"mainDataPlans\"></app-results>-->\n    </div>\n    <div class=\"btnSub\" *ngIf=\"form.valid && mortgageData.plans.length >0 && !averageInterest\">\n        <button class=\"btn btn-warning\" type=\"submit\">איך המשכנתא שלי</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/data-form/data-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/data-form/data-form.component.ts ***!
  \*************************************************************/
/*! exports provided: DataFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormComponent", function() { return DataFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_mortgagePlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/mortgagePlane */ "./src/app/classes/mortgagePlane.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataFormComponent = /** @class */ (function () {
    function DataFormComponent(http) {
        this.http = http;
        this.MPlans = _classes_mortgagePlane__WEBPACK_IMPORTED_MODULE_1__["Plans"];
        this.Period = _classes_mortgagePlane__WEBPACK_IMPORTED_MODULE_1__["Period"];
        this.mortgageData = new _classes_mortgagePlane__WEBPACK_IMPORTED_MODULE_1__["MortgageData"]();
    }
    DataFormComponent.prototype.ngOnInit = function () {
    };
    DataFormComponent.prototype.logForm = function () {
        var _this = this;
        this.http.addMortgage(this.mortgageData).subscribe(function (answer) {
            console.log(answer);
            _this.averageInterest = answer;
        });
    };
    DataFormComponent.prototype.ConvertToNum = function (num) {
        var str = num.replace(/,/g, '');
        return parseInt(str, 10);
    };
    DataFormComponent.prototype.btnAddNewPlan = function () {
        var plan = new _classes_mortgagePlane__WEBPACK_IMPORTED_MODULE_1__["MortgagePlan"]();
        plan.id = this.mortgageData.plans.length + 1;
        this.mortgageData.plans.push(plan);
    };
    DataFormComponent.prototype.btnRemovePlan = function (plan) {
        var indx = this.mortgageData.plans.findIndex(function (rec) { return rec.id === plan.id; });
        if (indx > -1) {
            this.mortgageData.plans.splice(indx, 1);
        }
    };
    DataFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-form',
            template: __webpack_require__(/*! ./data-form.component.html */ "./src/app/components/data-form/data-form.component.html"),
            styles: [__webpack_require__(/*! ./data-form.component.css */ "./src/app/components/data-form/data-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DataFormComponent);
    return DataFormComponent;
}());



/***/ }),

/***/ "./src/app/components/results/results.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/results/results.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    display: flex;\n    flex-direction: column;\n    width: 1000px;\n}\n\n.mainData {\n    display: flex;\n    flex-direction: row;\n    margin-right: auto;\n    margin-left: auto;}\n\n.mainDataPlans {\n    display: flex;\n    flex-direction: row;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.data {\n    width: 450px;\n    box-shadow: 2px 2px 20px hsl(0, 0%, 85%);\n    margin-right: 10px;\n    padding-top: 20px;\n    padding-left: 20px;\n    padding-right: 15px;\n    padding-bottom: 5px;\n    border-radius: 5px;\n}\n\n.dataPlans{\n    width: 450px;\n    box-shadow: 2px 2px 20px hsl(0, 0%, 85%);\n    margin-right: 10px;\n    margin-top: 15px;\n    padding-top: 20px;\n    padding-left: 20px;\n    padding-right: 15px;\n    padding-bottom: 5px;\n    border-radius: 5px;\n}\n\n.sideTilteParent {\n    background-color: lightblue;\n    -webkit-writing-mode: vertical-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: vertical-rl;\n    text-orientation: mixed;\n    text-align: center;\n    width: 40px;\n    box-shadow: 1px 1.5px 5px hsl(0, 0%, 85%);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.sideTilteParentPlans {\n    background-color: lightblue;\n    -webkit-writing-mode: vertical-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: vertical-rl;\n    text-orientation: mixed;\n    text-align: center;\n    width: 40px;\n    box-shadow: 1px 1.5px 6px hsl(0, 0%, 85%);\n    margin: 0px;\n}\n\n.innerContainer {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel, input {\n    display: block;\n}\n\n.btnAddPlan {\n    float: left;\n    margin-top: 20px;\n    width: 120px;\n    margin-left: 2%;\n}\n\ninput {\n    margin-bottom: 10px;\n}\n\nselect {\n    margin-bottom: 10px;\n}\n\n.messageError {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: red;\n}\n\n.buttons {\n    -ms-grid-row-align: end;\n        align-self: end;\n    width: 100%;\n    margin-bottom: 8px;\n}\n\n.btnContinue {\n    float: left;\n    margin-top: 20px;\n    width: 120px;\n}\n\n.btnSub {\n    margin-top: 15px;\n    text-align: center;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/results/results.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/results/results.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"sideTilteParentPlans\">\n    <div>מסקנות והמלצות</div>\n  </div>\n  <div class=\"dataPlans\">\n    <div class=\"innerContainer\">\n      <ul>\n        <li *ngFor=\"let result of data\">\n          <p>{{result?.plan}} : </p> <p>{{result?.result}}</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "data", void 0);
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/components/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/components/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/main-title/main-title.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-title/main-title.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    height: 250px;\n    display: flex;\n    flex-direction: row;\n}\n\n.titleText{\n    width: 50%;\n    margin-right: 100px;\n    margin-top: 30px;\n}\n\n.titlePic{\n    width: 50%;\n    background: url('mortgage.png') no-repeat center center;\n    height: 100%;\n}\n\n.pTitle{\n    font-weight: bold;\n}\n\nh2 {\n    color: blue;\n}"

/***/ }),

/***/ "./src/app/main-title/main-title.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-title/main-title.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"titleText\">\n    <h2>איך המשכנתא שלי?</h2>\n    <p class=\"pTitle\">באנו לעשות לכם קצת סדר</p>\n    <p>קיבלתם הצעה למשכנתא מהבנק?רוצים לדעת האם היא טובה</p>\n    <p>או לא ביחס לאנשים דומים לכם?הגעתם למקום הנכון!</p>\n  </div>\n  <div class=\"titlePic\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-title/main-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-title/main-title.component.ts ***!
  \****************************************************/
/*! exports provided: MainTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitleComponent", function() { return MainTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainTitleComponent = /** @class */ (function () {
    function MainTitleComponent() {
    }
    MainTitleComponent.prototype.ngOnInit = function () {
    };
    MainTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-title',
            template: __webpack_require__(/*! ./main-title.component.html */ "./src/app/main-title/main-title.component.html"),
            styles: [__webpack_require__(/*! ./main-title.component.css */ "./src/app/main-title/main-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainTitleComponent);
    return MainTitleComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\n    height: 75px;\n    background-color: green;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\"></div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/addCommasToNum.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/addCommasToNum.pipe.ts ***!
  \**********************************************/
/*! exports provided: AddCommas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommas", function() { return AddCommas; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCommas = /** @class */ (function () {
    function AddCommas() {
    }
    AddCommas.prototype.transform = function (num) {
        if (num) {
            return (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        }
        else {
            return '';
        }
    };
    AddCommas = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'addCommas' })
    ], AddCommas);
    return AddCommas;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.addMortgage = function (data) {
        return this.http.post('api/mortgage-plan', data);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eladhalperin/Desktop/mortgageProject/Optimal-Mortgage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map