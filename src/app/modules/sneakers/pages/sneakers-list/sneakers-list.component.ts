import { Component, OnInit } from '@angular/core';
import { SneakersApiService } from '../../services/sneakers-api.service';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

@Component({
  selector: 'app-sneakers-list',
  standalone: true,
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.scss'],
  imports: [CommonModule]  // Asegúrate de que CommonModule esté importado para los pipes `date` y `currency`
})
export class SneakersListComponent implements OnInit {
  sneakers: any[] = []; // Asegúrate de tener una lista para los datos

  constructor(private sneakersApiService: SneakersApiService) { }

  ngOnInit(): void {
    this.loadSneakers();
  }

  loadSneakers(): void {
    this.sneakersApiService.getSneakers().subscribe(
      (data: any) => {
        console.log('Datos de la API:', data); // Verifica los datos en la consola
        this.sneakers = data.map((item: any) => ({
          name: item.shoeName,        // Cambié "shoeName" a "name"
          image: item.thumbnail,      // Cambié "thumbnail" a "image"
          brand: item.brand,          // "brand" ya está bien
          price: item.retailPrice,    // Cambié "retailPrice" a "price"
          releaseYear: item.releaseDate // "releaseDate" se puede usar directamente
        }));
      },
      error => {
        console.error('Error al cargar las zapatillas:', error);
      }
    );
  }
}
