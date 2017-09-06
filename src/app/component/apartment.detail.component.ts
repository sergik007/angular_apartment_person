import {Component} from "@angular/core";
import {Apartment} from "../model/apartment";
import {ApartmentService} from "../service/apartment.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector:"apartment-details",
    template:`        
        <h2>{{apartment.id}}</h2>
        <input [(ngModel)]="apartment.name" placeholder="name"/><br/>
        <input [(ngModel)]="apartment.dateFrom" placeholder="dd-MM-yyyy" pattern=""/>
        <input [(ngModel)]="apartment.dateTo" placeholder="dd-MM-yyyy" pattern=""/>
        <div>
            <span>{{apartment.person.id}}</span>{{apartment.person.fullname}}
            <button (click)="">Show person</button>
        </div>
        <button (click)="goBack()">Back</button>
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