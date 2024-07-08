import { Component } from '@angular/core';
import { Prenda } from './Prenda';


@Component({
  selector: 'app-prendas-listado',
  templateUrl: './prendas-listado.component.html',
  styleUrl: './prendas-listado.component.scss'
})
export class PrendasListadoComponent {

  prendas : Prenda [] = [
    {
        nombre: "Boca 1998 - Titular",
        precio: 30000,
        stock: 10,
        image: "assets/img/boca.jpeg",
    },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 10,
    //     image: "assets/img/boca1998.jpg",
    // },
  ] 
    
  constructor() { }

}