import {Component, OnInit} from "@angular/core";
import {PersonService} from "../service/person.service";
import {Person} from "../model/person";

@Component({
    selector: "my-person",
    template: `        
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let person of persons"
            (click)="onSelect(person)" 
            >
                <span class="badge">{{person.id}}</span>{{person.fullname}}
            </li>
        </ul>
    `
})
export class PersonComponent implements OnInit{
    title: string = "Persons";
    persons: Person[];
    selectedPerson: Person;
    constructor(private personService: PersonService){

    }

    ngOnInit(): void {
        //person мы получае в результате успеха
       this.personService.getPersons().then(persons => this.persons = persons);
    }
    onSelect(person: Person):void{
        this.selectedPerson=person;
    }
}