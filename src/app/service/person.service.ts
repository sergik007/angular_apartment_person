import {Person} from "../model/person";
import {PERSONS} from "../model/mock-person";

export class PersonService {
    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }

    // getPerson(id: number): Person {
    //     return this.getPersons().then(person=>this.getPersons().)
    // }
}