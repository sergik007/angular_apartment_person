import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../service/apartment.service";
import {Apartment} from "../model/apartment";
import {Location} from "@angular/common";

@Component({
    selector: 'my-apartment',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let apartment of apartments"
                (click)="onSelect(apartment)"
                
            >
                <span>{{apartment.id}}</span>{{apartment.name}}
            </li>
        </ul>
    `

})
export class ApartmentComponent implements OnInit {
    title: string = 'Apartments';
    apartments: Apartment[];
    selectedApartment: Apartment;

    constructor(private apartmentService: ApartmentService,
                private activatedRoute: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.getApartments();
    }

    getApartments(): void {
        this.apartmentService.getApartents().then(apartments => this.apartments = apartments);
    }

    onSelect(apartment: Apartment): void {
        this.selectedApartment = apartment;
    }
}