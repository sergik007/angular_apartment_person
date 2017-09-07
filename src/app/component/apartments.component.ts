import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
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
        <div *ngIf="selectedApartment">
            <div>
                <span>{{selectedApartment.id}}</span>{{selectedApartment.name}}
                <button (click)="goToDetails()">Show details</button>
            </div>
        </div>
    `

})
export class ApartmentsComponent implements OnInit {
    title: string = 'Apartments';
    apartments: Apartment[];
    selectedApartment: Apartment;

    constructor(private apartmentService: ApartmentService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getApartments();
    }

    getApartments(): void {
        this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
    }

    onSelect(apartment: Apartment): void {
        this.selectedApartment = apartment;
    }

    goToDetails(): void {
        this.router.navigate(['/apartment', this.selectedApartment.id])
    }
}