"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var apartments_component_1 = require("../component/apartments.component");
var persons_component_1 = require("../component/persons.component");
var apartment_detail_component_1 = require("../component/apartment.detail.component");
var person_detail_component_1 = require("../component/person.detail.component");
var routes = [
    { path: "", redirectTo: "/apartment", pathMatch: 'full' },
    { path: "person", component: persons_component_1.PersonsComponent },
    { path: "apartment", component: apartments_component_1.ApartmentsComponent },
    { path: "apartment/:id", component: apartment_detail_component_1.ApartmentDetailComponent, pathMatch: 'full' },
    { path: 'person/:id', component: person_detail_component_1.PersonDetailComponent, pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map