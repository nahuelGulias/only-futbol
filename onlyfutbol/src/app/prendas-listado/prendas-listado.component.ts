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
        image: "assets/img/boca.jpg",
        cantidad: 0,
    },
    {
        nombre: "Argentina 2006 - Titular",
        precio: 23500,
        stock: 5,
        image: "assets/img/arg.jpg",
        cantidad: 0,
    },
    {
        nombre: "Fiorentina 2000 - Titular",
        precio: 35066,
        stock: 10,
        image: "assets/img/fiorentina.jpg",
        cantidad: 0,
    },
    {
        nombre: "Milan 2006 - Suplente",
        precio: 40120,
        stock: 10,
        image: "assets/img/milan.jpg",
        cantidad: 0,
    },
    {
        nombre: "Boca 1997 - Titular",
        precio: 30000,
        stock: 10,
        image: "assets/img/quilmes-boca.jpg",
        cantidad: 0,
    },
    {
        nombre: "PSG 2001 - Titular",
        precio: 47849,
        stock: 10,
        image: "assets/img/psg.jpg",
        cantidad: 0,
    },
    {
        nombre: "River 96-97 - Titular",
        precio: 26060,
        stock: 2011,
        image: "assets/img/river.jpg",
        cantidad: 0,
    },
    {
        nombre: "Boca 1996 - Titular",
        precio: 30000,
        stock: 10,
        image: "assets/img/boca-parmalat.jpg",
        cantidad: 0,
    },
    
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