import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ApartmentComponent} from "../component/apartment.component";
import {PersonComponent} from "../component/person.component";

const routes: Routes = [
    {path: "", redirectTo: "/apartment", pathMatch: 'full'},
    {path: "person", component: PersonComponent},
    {path: "apartment", component: ApartmentComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}