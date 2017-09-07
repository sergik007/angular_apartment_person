import {Injectable} from "@angular/core";
import {Apartment} from "../model/apartment";
import {APARTMENTS} from "../model/mock-apartment";

@Injectable()
export class ApartmentService {
    getApartments(): Promise<Apartment[]> {
        // var promice = new Promise((resolve, reject) => {
        //     resolve(APARTMENTS);
        //     reject("bad error");
        // });
        return Promise.resolve(APARTMENTS);
        // return promice;
    }

    getApartment(id: number): Promise<Apartment> {
        return this.getApartments().then(apartments => apartments.find(apartment => apartment.id === id));
    }

}