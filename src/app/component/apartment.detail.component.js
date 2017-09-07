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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var apartment_service_1 = require("../service/apartment.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ApartmentDetailComponent = (function () {
    function ApartmentDetailComponent(apartmentService, activatedRoute, location, router) {
        this.apartmentService = apartmentService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
    }
    ApartmentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    /*что тут происходит??????*/
    ApartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap
            .switchMap(function (params) { return _this.apartmentService.getApartment(+params.get('id')); })
            .subscribe(function (apartment) { return _this.apartment = apartment; });
    };
    ApartmentDetailComponent.prototype.goToPerson = function () {
        this.router.navigate(['/person', this.apartment.person.id]);
    };
    return ApartmentDetailComponent;
}());
ApartmentDetailComponent = __decorate([
    core_1.Component({
        selector: "apartment-details",
        template: "\n        <h2>{{apartment.id}}</h2>\n        <div>\n            <label>name</label>\n            <input [(ngModel)]=\"apartment.name\" placeholder=\"name\"/><br/>\n        </div>\n        <div>\n            <label>date from</label>\n            <input [(ngModel)]=\"apartment.dateFrom\" placeholder=\"dd-MM-yyyy\" pattern=\"\"/><br/>\n        </div>\n        <div>\n            <label>date to</label>\n            <input [(ngModel)]=\"apartment.dateTo\" placeholder=\"dd-MM-yyyy\" pattern=\"\"/><br/>\n        </div>\n        <div *ngIf=\"apartment.person\">\n            <button (click)=\"goToPerson()\">Show person</button>\n        </div>\n        <button (click)=\"goBack()\">Back</button>\n    ",
        styles: [
            "\n            div {\n                margin: 10px;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], ApartmentDetailComponent);
exports.ApartmentDetailComponent = ApartmentDetailComponent;
//# sourceMappingURL=apartment.detail.component.js.map