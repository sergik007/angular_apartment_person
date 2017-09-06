"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_apartment_1 = require("../model/mock-apartment");
var ApartmentService = (function () {
    function ApartmentService() {
    }
    ApartmentService.prototype.getApartents = function () {
        return Promise.resolve(mock_apartment_1.APARTMENTS);
    };
    return ApartmentService;
}());
ApartmentService = __decorate([
    core_1.Injectable()
], ApartmentService);
exports.ApartmentService = ApartmentService;
//# sourceMappingURL=apartment.service.js.map