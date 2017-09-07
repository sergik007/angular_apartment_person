import {Person} from "../model/person";
import {PERSONS} from "../model/mock-person";

export class PersonService {
    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }
    getPerson(id: number): Promise<Person>{
        return this.getPersons().then(persons => persons.find(person => person.id === id));
    }
}