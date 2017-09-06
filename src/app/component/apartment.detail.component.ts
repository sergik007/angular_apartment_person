import {Component} from "@angular/core";
import {Apartment} from "../model/apartment";
import {ApartmentService} from "../service/apartment.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector:"apartment-details",
    template:`        
        <h2>{{apartment.name}}</h2>
    `
})
export class ApartmentDetailComponent{
    apartment: Apartment;
    constructor(
        private apartmnetService: ApartmentService,
        private activedRoute: ActivatedRoute,
        private location: Location
        ){}
    goBack(): void {
        this.location.back();
    }
}