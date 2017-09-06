import {Injectable} from "@angular/core";
import {Apartment} from "../model/apartment";
import {APARTMENTS} from "../model/mock-apartment";

@Injectable()
export class ApartmentService{
    getApartents(): Promise<Apartment[]>{
        return Promise.resolve(APARTMENTS);
    }

}