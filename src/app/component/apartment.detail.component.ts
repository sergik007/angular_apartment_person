import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import {Apartment} from "../model/apartment";
import {ApartmentService} from "../service/apartment.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: "apartment-details",
    template: `
        <h2>{{apartment.id}}</h2>
        <div>
            <label>name</label>
            <input [(ngModel)]="apartment.name" placeholder="name"/><br/>
        </div>
        <div>
            <label>date from</label>
            <input [(ngModel)]="apartment.dateFrom" placeholder="dd-MM-yyyy" pattern=""/><br/>
        </div>
        <div>
            <label>date to</label>
            <input [(ngModel)]="apartment.dateTo" placeholder="dd-MM-yyyy" pattern=""/><br/>
        </div>
        <div *ngIf="apartment.person">
            <button (click)="goToPerson()">Show person</button>
        </div>
        <button (click)="goBack()">Back</button>
    `,
    styles: [
            `
            div {
                margin: 10px;
            }
        `
    ]
})
export class ApartmentDetailComponent implements OnInit {
    apartment: Apartment;

    constructor(private apartmentService: ApartmentService,
                private activatedRoute: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    goBack(): void {
        this.location.back();
    }

    /*что тут происходит??????*/
    ngOnInit(): void {
        this.activatedRoute.paramMap
            .switchMap((params: ParamMap) => this.apartmentService.getApartment(+params.get('id')))
            .subscribe(apartment => this.apartment = apartment);
    }

    goToPerson(): void {
        this.router.navigate(['/person', this.apartment.person.id]);
    }
}