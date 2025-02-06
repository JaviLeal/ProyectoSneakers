import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersListComponent } from './modules/sneakers/pages/sneakers-list/sneakers-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'sneakers', pathMatch: 'full' }, // Redirige a sneakers por defecto
  { path: 'sneakers', component: SneakersListComponent },
  { path: '**', redirectTo: 'sneakers' } // Maneja rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
