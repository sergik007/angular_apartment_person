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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var apartment_service_1 = require("../service/apartment.service");
var ApartmentsComponent = (function () {
    function ApartmentsComponent(apartmentService, router) {
        this.apartmentService = apartmentService;
        this.router = router;
        this.title = 'Apartments';
    }
    ApartmentsComponent.prototype.ngOnInit = function () {
        this.getApartments();
    };
    ApartmentsComponent.prototype.getApartments = function () {
        var _this = this;
        this.apartmentService.getApartments().then(function (apartments) { return _this.apartments = apartments; });
    };
    ApartmentsComponent.prototype.onSelect = function (apartment) {
        this.selectedApartment = apartment;
    };
    ApartmentsComponent.prototype.goToDetails = function () {
        this.router.navigate(['/apartment', this.selectedApartment.id]);
    };
    return ApartmentsComponent;
}());
ApartmentsComponent = __decorate([
    core_1.Component({
        selector: 'my-apartment',
        template: "\n        <h2>{{title}}</h2>\n        <ul>\n            <li *ngFor=\"let apartment of apartments\"\n                (click)=\"onSelect(apartment)\"\n            >\n                <span>{{apartment.id}}</span>{{apartment.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedApartment\">\n            <div>\n                <span>{{selectedApartment.id}}</span>{{selectedApartment.name}}\n                <button (click)=\"goToDetails()\">Show details</button>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService,
        router_1.Router])
], ApartmentsComponent);
exports.ApartmentsComponent = ApartmentsComponent;
//# sourceMappingURL=apartments.component.js.map