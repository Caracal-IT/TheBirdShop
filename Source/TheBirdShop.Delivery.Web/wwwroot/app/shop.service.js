"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
        });
        this.shopUrl = "api/shop";
    }
    ShopService.prototype.getBirds = function () {
        return this.http.get(this.shopUrl, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShopService.prototype.handleError = function (error) {
        var errMsg = error instanceof http_1.Response ? this.getResponseErrorMessage(error) : this.getErrorMessage(error);
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ShopService.prototype.getResponseErrorMessage = function (error) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        return error.status + " - " + (error.statusText || '') + " " + err;
    };
    ShopService.prototype.getErrorMessage = function (error) {
        return error.message ? error.message : error.toString();
    };
    return ShopService;
}());
ShopService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map