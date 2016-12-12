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
var shop_service_1 = require("./shop.service");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var AppComponent = (function () {
    function AppComponent(shopService, dragulaService) {
        this.shopService = shopService;
        this.dragulaService = dragulaService;
        this.username = "Kathleen Healy";
        this.balance = 40.00;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService
            .getBirds()
            .then(function (birds) { return _this.birds = birds; });
        this.dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value[1].id, value[2].id);
        });
    };
    AppComponent.prototype.onDrop = function (itemId, bagId) {
        var bird = this.birds[itemId - 1];
        if (bird.basket == "1" && bagId == "3" || bird.basket == "3" && bagId == "1") {
            this.dragulaService.find('bag1').drake.cancel(true);
            return;
        }
        console.log(bird.basket);
        if (bird.basket == "1" || bagId == "3") {
            this.balance += 5;
        }
        if (bird.basket == "3" || bagId == "1") {
            this.balance -= 5;
        }
        this.dragulaService.find('bag1').drake.cancel(true);
        bird.basket = bagId;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "the-bird-shop",
        styles: ["\n  .container2{\n     border: 1px solid red;\n     width: 336px;\n     height: 69px;\n  }\n  "],
        templateUrl: "./app/app.component.html"
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService, ng2_dragula_1.DragulaService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map