import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit {
    public mensaje: string;
    constructor() {
        console.log("Soy el Constructor Hooks Angular");
        this.mensaje = "Soy Hooks de Angular";
    }
    ngOnInit(): void {
        console.log("Ejecutando método OnInit");
    }

    ngDoCheck(): void {
        console.log("Ejecutando ngDoCheck()");
    }
    //CREAMOS UN METODO PERSONALIZADO
    cambiarMensaje() : void {
        this.mensaje = "Cambiando el mensaje en CLICK";
    }
}

