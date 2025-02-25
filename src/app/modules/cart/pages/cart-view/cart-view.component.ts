import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Solo CommonModule es necesario
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-cart-view',
  standalone: true, // Mantiene el componente standalone
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
  imports: [CommonModule] // No es necesario importar CurrencyPipe
})
export class CartViewComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private router: Router) {}

  goToCheckout(): void {
    this.router.navigate(['/checkout']); // Redirige a la página de pago
  }

  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart(): void {
    if (typeof window !== 'undefined' && localStorage) { 
      // Verificación de window para evitar errores en SSR
      const storedCart = localStorage.getItem('cart');
      this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    }
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateLocalStorage();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  private updateLocalStorage(): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
