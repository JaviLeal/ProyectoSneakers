import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SneakersListComponent } from './modules/sneakers/pages/sneakers-list/sneakers-list.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { CartViewComponent } from './modules/cart/pages/cart-view/cart-view.component';
import { AboutComponent } from './modules/users/pages/about/about.component';
import { ContactComponent } from './modules/users/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a sneakers por defecto
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: SneakersListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Manejo de rutas no encontradas
];
