"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_person_1 = require("../model/mock-person");
var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.getPersons = function () {
        return Promise.resolve(mock_person_1.PERSONS);
    };
    PersonService.prototype.getPerson = function (id) {
        return this.getPersons().then(function (persons) { return persons.find(function (person) { return person.id === id; }); });
    };
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map