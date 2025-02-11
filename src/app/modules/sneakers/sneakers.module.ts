import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersListComponent } from './pages/sneakers-list/sneakers-list.component';
import { SneakersApiService } from './services/sneakers-api.service'; // Asegúrate de que la ruta es correcta
import { HttpClientModule } from '@angular/common/http'; // Necesario para hacer peticiones HTTP
import { SharedModule } from '../../shared/shared.module';  // Importa el SharedModule
import { RouterModule } from '@angular/router';  // ✅ Importa RouterModule


@NgModule({
  declarations: [
    SneakersListComponent,  // Asegúrate de declarar tu componente aquí  
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,  // Necesario para realizar peticiones HTTP
    RouterModule.forChild([]), // ✅ Usa forChild() en vez de forRoot()

  ],
  providers: [SneakersApiService],  // Asegúrate de incluir el servicio aquí
  exports: [SneakersListComponent]  // Puedes exportar el componente si es necesario
})
export class SneakersModule { }
