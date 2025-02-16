import { Component, OnInit } from '@angular/core';
import { SneakersApiService } from '../../services/sneakers-api.service';
import { CommonModule } from '@angular/common';

/**
 * @component SneakersListComponent
 * @description Componente que muestra una lista de zapatillas obtenidas desde una API.
 */
@Component({
  selector: 'app-sneakers-list', // Selector del componente
  standalone: true, // Indica que es un componente independiente
  templateUrl: './sneakers-list.component.html', // Plantilla HTML del componente
  styleUrls: ['./sneakers-list.component.scss'], // Hoja de estilos del componente
  imports: [CommonModule] // Se importa CommonModule para usar directivas estructurales y pipes
})
export class SneakersListComponent implements OnInit {

  /**
   * @property {Array<Object>} sneakers - Lista de zapatillas obtenidas desde la API.
   * @property {string} sneakers.name - Nombre de la zapatilla.
   * @property {string} sneakers.image - URL de la imagen de la zapatilla.
   * @property {string} sneakers.brand - Marca de la zapatilla.
   * @property {number} sneakers.price - Precio de la zapatilla.
   * @property {Date} sneakers.releaseYear - Año de lanzamiento de la zapatilla.
   */
  sneakers: any[] = [];

  /**
   * @constructor
   * @param {SneakersApiService} sneakersApiService - Servicio para obtener datos de zapatillas desde la API.
   */
  constructor(private sneakersApiService: SneakersApiService) { }

  /**
   * @method ngOnInit
   * @description Método del ciclo de vida que se ejecuta al inicializar el componente.
   * Llama a `loadSneakers()` para cargar la lista de zapatillas.
   */
  ngOnInit(): void {
    this.loadSneakers();
  }

  /**
   * @method loadSneakers
   * @description Obtiene la lista de zapatillas desde la API y la asigna a `sneakers`.
   * Maneja errores en caso de fallo en la petición.
   */
  loadSneakers(): void {
    this.sneakersApiService.getSneakers().subscribe(
      (data: any) => {
        console.log('Datos de la API:', data); // Muestra los datos obtenidos en la consola
        this.sneakers = data.map((item: any) => ({
          name: item.shoeName,        // Nombre de la zapatilla
          image: item.thumbnail,      // Imagen de la zapatilla
          brand: item.brand,          // Marca de la zapatilla
          price: item.retailPrice,    // Precio de la zapatilla
          releaseYear: item.releaseDate // Año de lanzamiento
        }));
      },
      error => {
        console.error('Error al cargar las zapatillas:', error);
      }
    );
  }
}
