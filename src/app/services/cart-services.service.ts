import { Injectable } from '@angular/core';


// Interfaz que representa un producto
interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  
  private cart: Product[] = [];

  constructor() { }

  //Metodo para añadir producto al carrito

  addToCart(product: Product){
    this.cart.push(product);
  } 

  //Metodo para obtener todos los productos

  getCart(): Product[]{
    return this.cart;
  }


  //Metodo para calcular el precio total
  totalPrice(){
    let total: number = 0;
    for(let product of this.cart){
      total+= product.price;
    }
  }

  //Metodo para vaciar el carrito
  emptyCart(){
    this.cart = [];
    }
}
