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
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var shop_service_1 = require("./shop.service");
var ShopComponent = (function () {
    function ShopComponent(shopService, dragulaService) {
        this.shopService = shopService;
        this.dragulaService = dragulaService;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService
            .getBirds()
            .subscribe(function (birds) { return _this.birds = birds; });
        this.dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value[1].id, value[2].id);
        });
    };
    ShopComponent.prototype.onDrop = function (itemId, bagId) {
        var bird = this.birds[itemId - 1];
        if (bird.basket == "1" && bagId == "3" || bird.basket == "3" && bagId == "1") {
            this.dragulaService.find('bag1').drake.cancel(true);
            return;
        }
        console.log(bird.basket);
        if (bird.basket == "1" || bagId == "3") {
        }
        if (bird.basket == "3" || bagId == "1") {
        }
        this.dragulaService.find('bag1').drake.cancel(true);
        bird.basket = bagId;
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    core_1.Component({
        styleUrls: ['./app/shop.component.css'],
        templateUrl: './app/shop.component.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        ng2_dragula_1.DragulaService])
], ShopComponent);
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map