import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SneakersListComponent } from './modules/sneakers/pages/sneakers-list/sneakers-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sneakers', component: SneakersListComponent },
];
