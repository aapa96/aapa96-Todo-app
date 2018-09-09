webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_todo_service_todo_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoAddPage = /** @class */ (function () {
    function TodoAddPage(navCtrl, navParams, toastCtrl, todoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.todoService = todoService;
        this.object = new __WEBPACK_IMPORTED_MODULE_0__providers_todo_service_todo_service__["a" /* TodoModel */]('', '');
    }
    TodoAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoAddPage');
    };
    TodoAddPage.prototype.addTodo = function () {
        var _this = this;
        if (this.object.name.length != 0 && this.object.note.length != 0) {
            this.todoService.addTodo(this.object).subscribe(function (result) {
                _this.navCtrl.pop();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Enter all fields',
                position: "middle",
                duration: 3000
            });
            toast.present();
        }
    };
    TodoAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-todo-add',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/pages/todo-add/todo-add.html"*/'<!--\n  Generated template for the TodoAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TodoAdd</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n    \n    <ion-list >\n      <ion-item>\n        <ion-label color="primary" stacked>Name</ion-label>\n        <ion-input [(ngModel)]="object.name"  type="text" placeholder="Name" clearInput></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Note</ion-label>\n        <ion-textarea [(ngModel)]="object.note"  placeholder="Enter a description" clearInput></ion-textarea>\n      </ion-item>\n  </ion-list>\n  <button ion-button round text-center  (click)="addTodo()" >Add</button>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/pages/todo-add/todo-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_todo_service_todo_service__["b" /* TodoServiceProvider */]])
    ], TodoAddPage);
    return TodoAddPage;
}());

//# sourceMappingURL=todo-add.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/todo-add/todo-add.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_todo_service_todo_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_add_todo_add__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, todoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.alertCtrl = alertCtrl;
        this.todo = [];
        this.addPage = __WEBPACK_IMPORTED_MODULE_3__todo_add_todo_add__["a" /* TodoAddPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getTodo();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.getTodo();
    };
    HomePage.prototype.tapEventSelect = function (e, item) {
        var alert = this.alertCtrl.create({
            title: item.name,
            subTitle: item.note,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.tapEventDelete = function (e, id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'One Moment',
            message: 'Are you sure to delete the selected one?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.deleteTodo(id);
                        _this.getTodo();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.getTodo = function () {
        var _this = this;
        this.todoService.getTodo()
            .subscribe(function (data) {
            _this.todo = data['todo'];
            console.log(_this.todo);
        }, function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.deleteTodo = function (id) {
        this.todoService.deleteTodo(id)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      TODO APP\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only [navPush]="addPage">\n        <ion-icon name="add" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-list-header>\n    TODO\'s\n  </ion-list-header>\n  <ion-content>\n    <ion-list>\n      <ion-item  *ngFor="let item of todo" >\n          <h2 color="primary" (tap)="tapEventSelect($event,item)">{{ item.name }}</h2>\n          <ion-icon name="close" color="danger" (tap)="tapEventDelete($event,item._id)" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_todo_service_todo_service__["b" /* TodoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_todo_service_todo_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_todo_add_todo_add__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_add_todo_add__["a" /* TodoAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/todo-add/todo-add.module#TodoAddPageModule', name: 'TodoAddPage', segment: 'todo-add', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_add_todo_add__["a" /* TodoAddPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_todo_service_todo_service__["b" /* TodoServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alexparedesaranzamendi/Desktop/AranzaGroup/2018/Shellcatch/TODOs/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TodoServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoServiceProvider = /** @class */ (function () {
    function TodoServiceProvider(http) {
        this.http = http;
        console.log('Hello TodoServiceProvider Provider');
    }
    TodoServiceProvider.prototype.getTodo = function () {
        return this.http.get("https://aapa96todo.herokuapp.com/api/todo");
    };
    TodoServiceProvider.prototype.addTodo = function (Todo) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://aapa96todo.herokuapp.com/api/todo', Todo, httpOptions);
    };
    TodoServiceProvider.prototype.deleteTodo = function (id) {
        return this.http.delete("https://aapa96todo.herokuapp.com/api/todo/" + id);
    };
    TodoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoServiceProvider);
    return TodoServiceProvider;
}());

var TodoModel = /** @class */ (function () {
    function TodoModel(name, note) {
        this.name = name;
        this.note = note;
    }
    return TodoModel;
}());

//# sourceMappingURL=todo-service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map