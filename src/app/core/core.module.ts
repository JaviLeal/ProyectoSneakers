// core.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Necesario para las aplicaciones web
import { HttpClientModule } from '@angular/common/http';   // Necesario para solicitudes HTTP
import { AppComponent } from '../app.component';             // Componente raíz de la aplicación
import { SneakersApiService } from '../modules/sneakers/services/sneakers-api.service'; // El servicio para interactuar con la API
import { SneakersListComponent } from '../modules/sneakers/pages/sneakers-list/sneakers-list.component';  // El componente que muestra los sneakers

@NgModule({
  declarations: [
    AppComponent,
    SneakersListComponent  // Declaración del componente
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Asegúrate de incluir HttpClientModule
  ],
  providers: [SneakersApiService],  // Proveedor del servicio
  bootstrap: [AppComponent]  // Componente que se cargará primero
})
export class CoreModule { }
