import { Component, ViewChild, ElementRef } from "@angular/core";

@Component ({
    selector: "app-sumar-numeros", 
    templateUrl: "./sumarnumeros.component.html"
})

export class SumarNumerosComponent {
    //DECLARAMOS VARIABLES QUE HACEN REFERENCIA AL 
    //ID DE ANGULAR DE LOS CONTROLES HTML
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;
    public suma!: number;

    //EN ANGULAR TODAS LAS PROPIEDADES DEBEN SER INSTANCIADAS/INICIADAS
    //CON UN VALOR.
    //LOS OBJETOS DE REFERENCIA DEBEN INDICAR QUE SON UN NUEVO OBJETO Y 
    //UN VALOR POR DEFECTO PARA DICHO OBJETO
    //objetoRef = new ElementRef(VALUE POR DEFECTO)
    constructor() {
        //this.suma = 0;
        // this.cajaNumero1Ref = new ElementRef(0);
        // this.cajaNumero2Ref = new ElementRef(0);
    }

    sumarNumeros(): void {
        var num1 = this.cajaNumero1Ref.nativeElement.value;
        var num2 = this.cajaNumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}