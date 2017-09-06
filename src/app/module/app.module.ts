import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../component/app.component";
import {ApartmentService} from "../service/apartment.service";
import {PersonService} from "../service/person.service";
import {ApartmentComponent} from "../component/apartment.component";
import {PersonComponent} from "../component/person.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    exports:[

    ],
    declarations:[
        ApartmentComponent,
        PersonComponent,
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