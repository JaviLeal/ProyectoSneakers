import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersListComponent } from './modules/sneakers/pages/sneakers-list/sneakers-list.component';
import { HeaderComponent } from './shared/components/header/header.component'; // Importa el Header
import { RouterModule } from '@angular/router'; // Importa RouterModule para <router-outlet>
import { FooterComponent } from './shared/components/footer/footer.component';

/**
 * @component AppComponent
 * @description Componente principal de la aplicación. Actúa como contenedor para el header, el router-outlet y el footer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SneakersListComponent, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
