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
var bird_1 = require("./bird");
var BirdComponent = (function () {
    function BirdComponent() {
    }
    return BirdComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bird_1.Bird)
], BirdComponent.prototype, "bird", void 0);
BirdComponent = __decorate([
    core_1.Component({
        selector: "bird",
        styleUrls: ['./app/bird.component.css'],
        templateUrl: './app/bird.component.html'
    }),
    __metadata("design:paramtypes", [])
], BirdComponent);
exports.BirdComponent = BirdComponent;
//# sourceMappingURL=bird.component.js.map