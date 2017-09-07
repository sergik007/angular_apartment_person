import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../component/app.component";
import {ApartmentService} from "../service/apartment.service";
import {PersonService} from "../service/person.service";
import {ApartmentsComponent} from "../component/apartments.component";
import {PersonsComponent} from "../component/persons.component";
import {AppRoutingModule} from "./app-routing.module";
import {ApartmentDetailComponent} from "../component/apartment.detail.component";
import {PersonDetailComponent} from "../component/person.detail.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    exports:[

    ],
    declarations:[
        ApartmentDetailComponent,
        ApartmentsComponent,
        PersonsComponent,
        PersonDetailComponent,
        AppComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ApartmentService,
        PersonService
    ]
})
export class AppModule {

}