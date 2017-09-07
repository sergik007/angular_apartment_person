import {Component, OnInit} from "@angular/core";
import {PersonService} from "../service/person.service";
import {Person} from "../model/person";
import {Route, Router} from "@angular/router";

@Component({
    selector: "my-person",
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let person of persons"
                (click)="onSelect(person)"
            >
                <span class="badge">{{person.id}}</span>{{person.surname}}
            </li>
        </ul>
        <div *ngIf="selectedPerson">
            <div>{{selectedPerson.id}}</div>{{selectedPerson.surname}}
            <button (click)="goToDetails()">Details</button>
        </div>
    `
})
export class PersonsComponent implements OnInit{
    title: string = "Persons";
    persons: Person[];
    selectedPerson: Person;
    constructor(private personService: PersonService,
                private router: Router){

    }

    ngOnInit(): void {
        //person мы получае в результате успеха
       this.personService.getPersons().then(persons => this.persons = persons);
    }
    onSelect(person: Person):void{
        this.selectedPerson=person;
    }
    goToDetails(): void{
        this.router.navigate(["/person", this.selectedPerson.id]);
    }
}