import {Component} from "@angular/core";
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector:"person-detail",
    template:`        
        <h2>{{title}}</h2>
    `
})
export class PersonDetailComponent{
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
}