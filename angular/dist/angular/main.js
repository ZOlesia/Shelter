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

/***/ "./src/app/all-pets/all-pets.component.css":
/*!*************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.html":
/*!**************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>These pets are looking for a home! </p>\n<table class=\"table table-striped text-center\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr *ngFor = \"let p of allPets\">\n      <td>{{p.name}}</td>\n      <td>{{p.type}}</td>\n      <td>\n        <button routerLink = '/pets/details/{{p._id}}' class=\"btn btn-warning\" style=\"margin-right: 5px;\">Details</button>\n        <button routerLink = '/pets/edit/{{p._id}}' class=\"btn btn-success\" style=\"margin-right: 5px;\">Edit</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<button [routerLink] = \"['/pets/new']\" class=\"btn btn-outline-info float-right\">Add pet to shelter</button>"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.ts":
/*!************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.ts ***!
  \************************************************/
/*! exports provided: AllPetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPetsComponent", function() { return AllPetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
var AllPetsComponent = /** @class */ (function () {
    function AllPetsComponent(_httpService) {
        this._httpService = _httpService;
    }
    AllPetsComponent.prototype.ngOnInit = function () {
        this.showAll();
    };
    AllPetsComponent.prototype.showAll = function () {
        var _this = this;
        var observable = this._httpService.showPets();
        observable.subscribe(function (data) {
            console.log(data);
            _this.allPets = data['pets'];
        });
    };
    AllPetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-pets',
            template: __webpack_require__(/*! ./all-pets.component.html */ "./src/app/all-pets/all-pets.component.html"),
            styles: [__webpack_require__(/*! ./all-pets.component.css */ "./src/app/all-pets/all-pets.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AllPetsComponent);
    return AllPetsComponent;
}());



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
/* harmony import */ var _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-pet/show-pet.component */ "./src/app/show-pet/show-pet.component.ts");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");
/* harmony import */ var _update_pet_update_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-pet/update-pet.component */ "./src/app/update-pet/update-pet.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pets/new', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_5__["NewPetComponent"] },
    { path: 'pets/edit/:id', component: _update_pet_update_pet_component__WEBPACK_IMPORTED_MODULE_4__["UpdatePetComponent"] },
    { path: 'pets', component: _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_3__["AllPetsComponent"] },
    { path: 'pets/details/:id', component: _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_2__["ShowPetComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/pets' }
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

module.exports = "<div class=\"container\">\n  <h1>Pet Shelter</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-pet/show-pet.component */ "./src/app/show-pet/show-pet.component.ts");
/* harmony import */ var _update_pet_update_pet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-pet/update-pet.component */ "./src/app/update-pet/update-pet.component.ts");
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
                _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_6__["AllPetsComponent"],
                _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_7__["NewPetComponent"],
                _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_8__["ShowPetComponent"],
                _update_pet_update_pet_component__WEBPACK_IMPORTED_MODULE_9__["UpdatePetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"] // <-- register FormsModule with our app.
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
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

 //Dependency injection
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    } //Dependency injection
    HttpService.prototype.showPets = function () {
        return this._http.get('/basic');
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post('/basic', newPet);
    };
    HttpService.prototype.showOne = function (id) {
        return this._http.get('/basic/' + id);
    };
    HttpService.prototype.deleteOnePet = function (id) {
        return this._http.delete('/basic/' + id);
    };
    HttpService.prototype.likePet = function (id, pet) {
        return this._http.put('/basic/like/' + id, pet);
    };
    HttpService.prototype.updatePet = function (id, updatePet) {
        return this._http.put('/basic/edit/' + id, updatePet);
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

/***/ "./src/app/new-pet/new-pet.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.html":
/*!************************************************!*\
  !*** ./src/app/new-pet/new-pet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"addOnePet()\" class=\"bg-light  mx-auto border border-info\" style=\"height: 780px;\">\n\n  <p style=\"margin: 75px 0 0 125px\">Know of a pet needing a home? </p>\n\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"newPet.name\">Pet Name</label>\n        <input type=\"text\" class = \"form-control\" name=\"newPet.name\" placeholder=\"Name..\" required minlength=\"3\"  [(ngModel)] = \"newPet.name\" #name=\"ngModel\">\n    </div>\n\n    <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n    <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"name.errors.required\">\n        Pet Name is required.\n        </div>\n        <div *ngIf=\"name.errors.minlength\">\n        Name must be at least 3 characters long.\n        </div>\n    </div>\n\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"newPet.type\">Pet Type</label>\n        <input type=\"text\" class = \"form-control\" name=\"newPet.type\" placeholder=\"Type..\" required minlength=\"3\"  [(ngModel)] = \"newPet.type\" #type=\"ngModel\">\n    </div>\n\n    <div *ngIf=\"type.invalid && (type.dirty || !type.untouched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"type.errors.required\">\n        Type is required.\n        </div>\n        <div *ngIf=\"type.errors.minlength\">\n        Type must be at least 3 characters long.\n        </div>\n    </div>\n\n\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"newPet.description\">Description</label>\n        <input type=\"text\" class = \"form-control\" name=\"newPet.description\" placeholder=\"Description..\" required minlength=\"3\"  [(ngModel)] = \"newPet.description\" #description=\"ngModel\">\n    </div>\n\n    <div *ngIf=\"description.invalid && (description.dirty || !description.untouched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"description.errors.required\">\n            Description is required.\n        </div>\n        <div *ngIf=\"description.errors.minlength\">\n            Description must be at least 3 characters long.\n        </div>\n    </div>\n\n\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"skill1\">Skill 1: </label>\n        <input type=\"text\" class = \"form-control\" name=\"skill1\" placeholder=\"Skill..\" [(ngModel)] = \"skill1\">\n    </div>\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"skill2\">Skill 2: </label>\n        <input type=\"text\" class = \"form-control\" name=\"skill2\" placeholder=\"Skill..\" [(ngModel)] = \"skill2\">\n    </div>\n    <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n        <label for=\"skill3\">Skill 3: </label>\n        <input type=\"text\" class = \"form-control\" name=\"skill3\" placeholder=\"Skill..\" [(ngModel)] = \"skill3\">\n    </div>\n\n\n    <input type=\"submit\" value=\"Add\" class=\"btn btn-success float-right\" [disabled]=\"!name.valid || !type.valid || !description.valid\">\n    <button [routerLink] = \"['/pets']\" class=\"btn btn-primary float-right\" >Cancel</button>\n</form>\n\n\n\n    \n\n\n"

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.ts ***!
  \**********************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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

 // dependency injection
 //for the routes
var NewPetComponent = /** @class */ (function () {
    function NewPetComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.newPet = { name: "", type: "", description: "", skills: [] };
    }
    NewPetComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", type: "", description: "", skills: [] };
    };
    NewPetComponent.prototype.addOnePet = function () {
        var _this = this;
        this.newPet.skills.push(this.skill1, this.skill2, this.skill3);
        var observable = this._httpService.addPet(this.newPet);
        observable.subscribe(function (data) {
            if (!data['err']) {
                console.log(_this.newPet.skills);
                console.log(data);
                _this.newPet = { name: "", type: "", description: "", skills: [] };
                _this._router.navigate(['/pets']);
            }
            else {
                _this.err = data['err'].errors.name.message;
                _this._router.navigate(['/pets/new']);
            }
        });
    };
    NewPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-pet',
            template: __webpack_require__(/*! ./new-pet.component.html */ "./src/app/new-pet/new-pet.component.html"),
            styles: [__webpack_require__(/*! ./new-pet.component.css */ "./src/app/new-pet/new-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewPetComponent);
    return NewPetComponent;
}());



/***/ }),

/***/ "./src/app/show-pet/show-pet.component.css":
/*!*************************************************!*\
  !*** ./src/app/show-pet/show-pet.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show-pet/show-pet.component.html":
/*!**************************************************!*\
  !*** ./src/app/show-pet/show-pet.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"pet\">\n  \n\n  <p class=\"font-weight-bold\"> Details about {{pet.name}}</p>\n  <p><span class=\"font-weight-bold\">Type:</span>  {{pet.type}}</p>\n  <p><span class=\"font-weight-bold\">Description: </span>{{pet.description}}</p>\n  <p class=\"font-weight-bold\">Skills: </p>\n    <p>{{pet.skills[0]}}</p>\n    <p>{{pet.skills[1]}}</p>\n    <p>{{pet.skills[2]}}</p>\n\n  <p><span class=\"font-weight-bold\">Likes:</span> {{pet.likes}}</p>\n\n  <button (click)=\"like()\" class=\"btn btn-danger\" onclick=\"this.disabled=true\" style=\"margin-right: 5px;\">Like this pet</button>\n  <button (click)=\"delete()\" class=\"btn btn-warning\" style=\"margin-right: 5px;\">Adop this pet</button>\n  <button [routerLink]=\"['/pets']\" class=\"btn btn-info\">Home</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/show-pet/show-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/show-pet/show-pet.component.ts ***!
  \************************************************/
/*! exports provided: ShowPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPetComponent", function() { return ShowPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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

 // dependency injection
 //for the routes
var ShowPetComponent = /** @class */ (function () {
    function ShowPetComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ShowPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.petId = params['id'];
        });
        this.showPet(this.petId);
    };
    ShowPetComponent.prototype.showPet = function (id) {
        var _this = this;
        var observable = this._httpService.showOne(this.petId);
        observable.subscribe(function (data) {
            _this.pet = data['pet'];
            console.log(_this.pet);
        });
    };
    ShowPetComponent.prototype.delete = function () {
        var _this = this;
        console.log(this.petId);
        var observable = this._httpService.deleteOnePet(this.petId);
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/pets']);
        });
    };
    ShowPetComponent.prototype.like = function () {
        console.log(this.petId);
        this.pet.likes++;
        var observable = this._httpService.likePet(this.petId, this.pet);
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    ShowPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-pet',
            template: __webpack_require__(/*! ./show-pet.component.html */ "./src/app/show-pet/show-pet.component.html"),
            styles: [__webpack_require__(/*! ./show-pet.component.css */ "./src/app/show-pet/show-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowPetComponent);
    return ShowPetComponent;
}());



/***/ }),

/***/ "./src/app/update-pet/update-pet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/update-pet/update-pet.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-pet/update-pet.component.html":
/*!******************************************************!*\
  !*** ./src/app/update-pet/update-pet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"updatePet\">\n<form (submit)=\"updateOnePet()\" class=\"bg-light  mx-auto border border-info\" style=\"height: 780px;\">\n  <p style=\"margin: 75px 0 0 125px\">Edit this pet </p>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"updatePet.name\">Pet Name</label>\n      <input type=\"text\" class = \"form-control\" name=\"updatePet.name\" placeholder=\"Name..\" required minlength=\"3\"  [(ngModel)] = \"updatePet.name\" #name=\"ngModel\">\n  </div>\n  <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n  <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\"\n    class=\"alert alert-danger\">\n      <div *ngIf=\"name.errors.required\">\n      Pet Name is required.\n      </div>\n      <div *ngIf=\"name.errors.minlength\">\n      Name must be at least 3 characters long.\n      </div>\n  </div>\n\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"updatePet.type\">Pet Type</label>\n      <input type=\"text\" class = \"form-control\" name=\"updatePet.type\" placeholder=\"Type..\" required minlength=\"3\"  [(ngModel)] = \"updatePet.type\" #type=\"ngModel\">\n  </div>\n\n  <div *ngIf=\"type.invalid && (type.dirty || !type.untouched)\"\n    class=\"alert alert-danger\">\n      <div *ngIf=\"type.errors.required\">\n      Type is required.\n      </div>\n      <div *ngIf=\"type.errors.minlength\">\n      Type must be at least 3 characters long.\n      </div>\n  </div>\n\n\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"updatePet.description\">Description</label>\n      <input type=\"text\" class = \"form-control\" name=\"updatePet.description\" placeholder=\"Description..\" required minlength=\"3\"  [(ngModel)] = \"updatePet.description\" #description=\"ngModel\">\n  </div>\n\n  <div *ngIf=\"description.invalid && (description.dirty || !description.untouched)\"\n  class=\"alert alert-danger\">\n    <div *ngIf=\"description.errors.required\">\n        Description is required.\n    </div>\n    <div *ngIf=\"description.errors.minlength\">\n        Description must be at least 3 characters long.\n    </div>\n  </div>\n\n\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"skill1\">Skill 1: </label>\n      <input type=\"text\" class = \"form-control\" name=\"skill1\" placeholder=\"Skill..\" [(ngModel)] = \"skill1\">\n  </div>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"skill2\">Skill 2: </label>\n      <input type=\"text\" class = \"form-control\" name=\"skill2\" placeholder=\"Skill..\" [(ngModel)] = \"skill2\">\n  </div>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"skill3\">Skill 3: </label>\n      <input type=\"text\" class = \"form-control\" name=\"skill3\" placeholder=\"Skill..\" [(ngModel)] = \"skill3\">\n  </div>\n\n\n  <input type=\"submit\" value=\"Edit\" class=\"btn btn-success float-right\" [disabled]=\"!name.valid || !type.valid || !description.valid\">\n  <button routerLink = '/pets/details/{{petId}}' class=\"btn btn-primary float-right\" >Cancel</button>\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/update-pet/update-pet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/update-pet/update-pet.component.ts ***!
  \****************************************************/
/*! exports provided: UpdatePetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePetComponent", function() { return UpdatePetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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

 // dependency injection
 //for the routes
var UpdatePetComponent = /** @class */ (function () {
    function UpdatePetComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    UpdatePetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.petId = params['id'];
            _this.showPet(_this.petId);
        });
        // this.updatePet = {name: "", type: "", description: "", skills: []};
    };
    UpdatePetComponent.prototype.showPet = function (id) {
        var _this = this;
        var observable = this._httpService.showOne(this.petId);
        observable.subscribe(function (data) {
            _this.updatePet = data['pet'];
            _this.skill1 = _this.updatePet.skills[0];
            _this.skill2 = _this.updatePet.skills[1];
            _this.skill3 = _this.updatePet.skills[2];
        });
    };
    UpdatePetComponent.prototype.updateOnePet = function () {
        var _this = this;
        this.updatePet.skills[0] = this.skill1;
        this.updatePet.skills[1] = this.skill2;
        this.updatePet.skills[2] = this.skill3;
        var observable = this._httpService.updatePet(this.petId, this.updatePet);
        observable.subscribe(function (data) {
            if (!data['err']) {
                _this._router.navigate(['/pets/details/' + _this.petId]);
            }
            else {
                _this.err = data['err'].errors.name.message;
                _this._router.navigate(['/pets/edit/' + _this.petId]);
            }
        });
    };
    UpdatePetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-pet',
            template: __webpack_require__(/*! ./update-pet.component.html */ "./src/app/update-pet/update-pet.component.html"),
            styles: [__webpack_require__(/*! ./update-pet.component.css */ "./src/app/update-pet/update-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdatePetComponent);
    return UpdatePetComponent;
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

module.exports = __webpack_require__(/*! C:\Users\56ole\Documents\DOJO\DojoAssignments\MEAN\ANGULAR\pets\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map