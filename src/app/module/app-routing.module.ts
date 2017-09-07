import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ApartmentsComponent} from "../component/apartments.component";
import {PersonsComponent} from "../component/persons.component";
import {ApartmentDetailComponent} from "../component/apartment.detail.component";
import {PersonDetailComponent} from "../component/person.detail.component";

const routes: Routes = [
    {path: "", redirectTo: "/apartment", pathMatch: 'full'},
    {path: "person", component: PersonsComponent},
    {path: "apartment", component: ApartmentsComponent},
    {path: "apartment/:id", component: ApartmentDetailComponent, pathMatch: 'full'},
    {path: 'person/:id', component: PersonDetailComponent, pathMatch: "full"}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}