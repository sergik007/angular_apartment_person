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
var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
        this.title = "Persons";
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        //person мы получае в результате успеха
        this.personService.getPersons().then(function (persons) { return _this.persons = persons; });
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        selector: "my-person",
        template: "        \n        <h2>{{title}}</h2>\n        <ul>\n            <li *ngFor=\"let person of persons\">\n                <span class=\"badge\">{{person.id}}</span>{{person.fullname}}\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map