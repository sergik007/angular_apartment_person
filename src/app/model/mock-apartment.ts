import {Apartment} from "./apartment";
import {Person} from "./person";
import {PERSONS} from "./mock-person";

export const APARTMENTS: Apartment[] = [
    {id: 1, name: "A", dateFrom: new Date(), dateTo: new Date, person: PERSONS[1]},
    {id: 2, name: "B", dateFrom: new Date(), dateTo: new Date, person: PERSONS[2]},
    {id: 3, name: "C", dateFrom: new Date(), dateTo: new Date, person: PERSONS[3]},
    {id: 4, name: "D", dateFrom: new Date(), dateTo: new Date, person: PERSONS[4]}
]