import { Component, } from '@angular/core';
import { Prenda } from './Prenda';
import { PrendasCarritoService } from '../prendas-carrito.service';


@Component({
  selector: 'app-prendas-listado',
  templateUrl: './prendas-listado.component.html',
  styleUrl: './prendas-listado.component.scss'
})
export class PrendasListadoComponent {
   
constructor( private carrito: PrendasCarritoService) {}

    
  prendas : Prenda [] = [
    {
        nombre: "Boca 1998 - Titular",
        precio: 30000,
        stock: 10,
        image: "assets/img/boca.jpeg",
        oferta: false,
        cantidad: 0,
    },
    {
        nombre: "Boca 1998 ",
        precio: 30000,
        stock: 0,
        image: "assets/img/boca.jpeg",
        oferta: false,
        cantidad: 0,
    },
    {
        nombre: "Boca 1998 - Titular 2",
        precio: 30000,
        stock: 10,
        image: "assets/img/boca.jpeg",
        oferta: false,
        cantidad: 0,
    },
    {
        nombre: "Boca 1998 - Titular 3",
        precio: 30000,
        stock: 10,
        image: "assets/img/boca.jpeg",
        oferta: false,
        cantidad: 0,
    },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 10,
    //     image: "assets/img/boca.jpeg",
    //     oferta: false,
    //     cantidad: 0,
    // },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 10,
    //     image: "assets/img/boca.jpeg",
    //     oferta: false,
    //     cantidad: 0,
    // },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 0,
    //     image: "assets/img/boca.jpeg",
    //     oferta: false,
    //     cantidad: 0,
    // },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 0,
    //     image: "assets/img/boca.jpeg",
    //     oferta: false,
    //     cantidad: 0,
    // },
    // {
    //     nombre: "Boca 1998 - Titular",
    //     precio: 30000,
    //     stock: 10,
    //     image: "assets/img/boca.jpeg",
    //     oferta: false,
    //     cantidad: 0,
    // },
    
] 




agregarCarrito(prendas:Prenda) : void{
    if(prendas.cantidad > 0)
        this.carrito.agregarCarrito(prendas);
    
    prendas.stock -= prendas.cantidad;
    prendas.cantidad = 0;
}





cantMaxStock(m:string){
    return alert(m);
}

}