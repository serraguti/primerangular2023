import {Component} from '@angular/core';

@Component ({
    //DEBEMOS INDICAR EL NOMBRE DEL COMPONENT 
    //MEDIANTE SELECTOR.  SE UTILIZAN GUIONES PARA 
    //SEPARAR CADA PALABRA DEL NOMBRE DEL COMPONENT
    selector: "primer-component",
    //COMO NO QUEREMOS UN FICHERO HTML DE TEMPLATE, 
    //SE UTILIZA LA PALABRA template PARA INDICAR TODO 
    //EL DIBUJO AQUI
    templateUrl: "./primer.component.html" ,
    styleUrls: [ "./primer.component.css"]
})

//TODO COMPONENT DEBE SER DECLARADO COMO CLASE
//DICHO NOMBRE DE CLASE SERA UTILIZADO POSTERIORMENTE 
//EN app.module.ts
export class PrimerComponent {
    //LAS PROPIEDADES DE UN COMPONENT SE PUEDEN EN SU DIBUJO
    //DICHAS PROPIEDADES SON TIPADAS
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    //EL CONSTRUCTOR DE UNA CLASE ES EL PRIMER METODO
    //POR EL QUE ENTRA CUALQUIER COMPONENT.  AQUI PODEMOS 
    //INICIALIZAR LOS VALORES DE LAS PROPIEDADES
    constructor() {
        //PARA ACCEDER A LAS PROPIEDADES DE UNA CLASE
        //SE UTILIZA LA PALABRA this
        this.titulo = "Miércoles de Puente";
        this.descripcion = "Aprendiendo Angular a tope!!!";
        this.anyo = 2023;
    }
}