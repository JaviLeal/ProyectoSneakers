import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersListComponent } from './pages/sneakers-list/sneakers-list.component';
import { SneakersApiService } from './services/sneakers-api.service'; // Asegúrate de que la ruta es correcta
import { HttpClientModule } from '@angular/common/http'; // Necesario para hacer peticiones HTTP

@NgModule({
  declarations: [
    SneakersListComponent  // Asegúrate de declarar tu componente aquí
  ],
  imports: [
    CommonModule,
    HttpClientModule  // Necesario para realizar peticiones HTTP
  ],
  providers: [SneakersApiService],  // Asegúrate de incluir el servicio aquí
  exports: [SneakersListComponent]  // Puedes exportar el componente si es necesario
})
export class SneakersModule { }
