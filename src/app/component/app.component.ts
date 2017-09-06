import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h2>{{title}}</h2>
        <nav>
            <a routerLink="/apartment" routerLinkActive="active">Apartments</a>
            <a routerLink="/person" routerLinkActive="active">Persons</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`        
        .active{
            color: red;
        }
    `]
})
export class AppComponent {
    title: string ="Face title"
}