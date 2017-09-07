import {Component, OnInit} from "@angular/core";
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector:"person-detail",
    template:`
        <h2>{{title}}</h2>
        <div *ngIf="person">
            <input [(ngModel)]="person.name" placeholder="name">
            <input [(ngModel)]="person.surname" placeholder="surname">
            <input [(ngModel)]="person.birthday" placeholder="dd-MM-yyyy">
        </div>
        <button (click)="goBack()">Back</button>
    `
})
export class PersonDetailComponent implements OnInit{
    title: string = "Person Detail";
    person: Person;
    constructor(
        private personService: PersonService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ){}

    goBack(): void{
        this.location.back();
    }
    ngOnInit(): void{
        this.activatedRoute.paramMap
            .switchMap((params: ParamMap) => this.personService.getPerson(+params.get('id')))
            .subscribe(person => this.person = person);
    }
}