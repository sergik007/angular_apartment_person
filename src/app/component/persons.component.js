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
var PersonsComponent = (function () {
    function PersonsComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        this.title = "Persons";
    }
    PersonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //person мы получае в результате успеха
        this.personService.getPersons().then(function (persons) { return _this.persons = persons; });
    };
    PersonsComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PersonsComponent.prototype.goToDetails = function () {
        this.router.navigate(["/person", this.selectedPerson.id]);
    };
    return PersonsComponent;
}());
PersonsComponent = __decorate([
    core_1.Component({
        selector: "my-person",
        template: "\n        <h2>{{title}}</h2>\n        <ul>\n            <li *ngFor=\"let person of persons\"\n                (click)=\"onSelect(person)\"\n            >\n                <span class=\"badge\">{{person.id}}</span>{{person.surname}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedPerson\">\n            <div>{{selectedPerson.id}}</div>{{selectedPerson.surname}}\n            <button (click)=\"goToDetails()\">Details</button>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.Router])
], PersonsComponent);
exports.PersonsComponent = PersonsComponent;
//# sourceMappingURL=persons.component.js.map