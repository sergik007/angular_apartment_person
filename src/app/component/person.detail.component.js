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
var person_service_1 = require("../service/person.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, activatedRoute, location) {
        this.personService = personService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.title = "Person Detail";
    }
    PersonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap
            .switchMap(function (params) { return _this.personService.getPerson(+params.get('id')); })
            .subscribe(function (person) { return _this.person = person; });
    };
    return PersonDetailComponent;
}());
PersonDetailComponent = __decorate([
    core_1.Component({
        selector: "person-detail",
        template: "\n        <h2>{{title}}</h2>\n        <div *ngIf=\"person\">\n            <input [(ngModel)]=\"person.name\" placeholder=\"name\">\n            <input [(ngModel)]=\"person.surname\" placeholder=\"surname\">\n            <input [(ngModel)]=\"person.birthday\" placeholder=\"dd-MM-yyyy\">\n        </div>\n        <button (click)=\"goBack()\">Back</button>\n    "
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute,
        common_1.Location])
], PersonDetailComponent);
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person.detail.component.js.map