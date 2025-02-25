import { Component, OnInit } from '@angular/core';
import { SneakersApiService } from '../../services/sneakers-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sneakers-list',
  standalone: true,
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.scss'],
  imports: [CommonModule, HttpClientModule]
})
export class SneakersListComponent implements OnInit {
  sneakers: any[] = [];
  showMessage: boolean = false; 


  constructor(private sneakersApiService: SneakersApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadSneakers();
  }

  loadSneakers(): void {
    this.sneakersApiService.getSneakers().subscribe({
      next: (data: any) => {
        console.log('Datos de la API:', data);
        this.sneakers = data.map((item: any) => ({
          name: item.shoeName,
          image: item.thumbnail,
          brand: item.brand,
          price: item.retailPrice,
          releaseYear: item.releaseDate
        }));
      },
      error: (err) => console.error('Error al cargar zapatillas:', err)
    });
  }

  addToCart(product: any) {
    console.log('Producto agregado al carrito:', product);
    
    let cart = localStorage.getItem('cart');
    let cartItems = cart ? JSON.parse(cart) : [];
  
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
  
}
