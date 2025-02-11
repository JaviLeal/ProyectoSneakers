import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SneakersListComponent } from './modules/sneakers/pages/sneakers-list/sneakers-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a sneakers por defecto
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: SneakersListComponent },
  { path: '**', redirectTo: '' } // Manejo de rutas no encontradas
];
