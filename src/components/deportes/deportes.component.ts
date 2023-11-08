import {Component} from '@angular/core';

@Component ( {
    selector: "app-deportes", 
    templateUrl: "./deportes.component.html", 
    styleUrls: ["./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.numeros = [4,5,6,7,8,9,11,14,22, 165];
        this.sports = ["Canicas", "Padel", "Futbol", "Curling", "Petanca", "Dardos"]
    }
}