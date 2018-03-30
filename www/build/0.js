webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//declare var google;
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 },
            preserveViewport: true
        });
        this.directionsDisplay.setMap(this.map);
        //calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    };
    HomePage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        console.log(this.directionsDisplay.zoom);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kiran\google-maps\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="floating-panel">\n  <b>Start: </b>\n  <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n    <option value="chicago, il">Chicago</option>\n    <option value="st louis, mo">St Louis</option>\n    <option value="joplin, mo">Joplin, MO</option>\n    <option value="oklahoma city, ok">Oklahoma City</option>\n    <option value="amarillo, tx">Amarillo</option>\n    <option value="gallup, nm">Gallup, NM</option>\n    <option value="flagstaff, az">Flagstaff, AZ</option>\n    <option value="winona, az">Winona</option>\n    <option value="kingman, az">Kingman</option>\n    <option value="barstow, ca">Barstow</option>\n    <option value="san bernardino, ca">San Bernardino</option>\n    <option value="los angeles, ca">Los Angeles</option>\n  </select><br>\n  <b>End: </b>\n  <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n    <option value="chicago, il">Chicago</option>\n    <option value="st louis, mo">St Louis</option>\n    <option value="joplin, mo">Joplin, MO</option>\n    <option value="oklahoma city, ok">Oklahoma City</option>\n    <option value="amarillo, tx">Amarillo</option>\n    <option value="gallup, nm">Gallup, NM</option>\n    <option value="flagstaff, az">Flagstaff, AZ</option>\n    <option value="winona, az">Winona</option>\n    <option value="kingman, az">Kingman</option>\n    <option value="barstow, ca">Barstow</option>\n    <option value="san bernardino, ca">San Bernardino</option>\n    <option value="los angeles, ca">Los Angeles</option>\n  </select>\n  </div>\n  \n    <div #map id="map" ></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kiran\google-maps\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map