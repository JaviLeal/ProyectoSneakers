import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  // Agregar un producto al carrito
  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Obtener productos del carrito
  getCartItems() {
    return this.cart;
  }

  // Vaciar el carrito
  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
