import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from '../modules/auth/pages/login/login.component';
import { RegisterComponent } from '../modules/auth/pages/register/register.component';
import { CartViewComponent } from '../modules/cart/pages/cart-view/cart-view.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../modules/users/pages/about/about.component';
import { ContactComponent } from '../modules/users/pages/contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartViewComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartViewComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class SharedModule { }

