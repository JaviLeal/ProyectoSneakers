import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersListComponent } from './pages/sneakers-list/sneakers-list.component';
import { SneakersApiService } from './services/sneakers-api.service'; // Servicio para manejar las peticiones de sneakers
import { SharedModule } from '../../shared/shared.module';  // Importa el módulo compartido con componentes reutilizables
import { RouterModule } from '@angular/router';  // Permite la navegación dentro del módulo

/**
 * @module SneakersModule
 * @description Módulo encargado de la gestión de sneakers. Contiene componentes, servicios y rutas
 * relacionadas con la visualización y manejo de los sneakers en la aplicación.
 */
@NgModule({
  declarations: [
    SneakersListComponent,  // Componente principal de la lista de sneakers
  ],
  imports: [
    CommonModule, // Proporciona directivas y funcionalidades comunes de Angular
    SharedModule, // Contiene componentes reutilizables dentro de la aplicación
    RouterModule.forChild([]), // Configuración de rutas hijas específicas de este módulo
  ],
  providers: [SneakersApiService],  // Servicio encargado de la gestión de sneakers
  exports: [SneakersListComponent]  // Exporta el componente para su uso en otros módulos
})
export class SneakersModule { }
