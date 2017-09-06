import {Component} from "@angular/core";

@Component({
    selector: 'my-apartment',
    template: `
        <h2>{{title}}</h2>
    `

})
export class ApartmentComponent {
    title: string = "Apartments";
}