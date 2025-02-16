import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //  Importamos CommonModule para usar directivas de Angular
import { AboutComponent } from './pages/about/about.component';

/**
 * @module UsersModule
 * @description Módulo encargado de gestionar la información y vistas relacionadas con los usuarios.
 * Contiene componentes y funcionalidades específicas para la sección de usuarios.
 */
@NgModule({
  declarations: [
    AboutComponent //  Componente para la página "Acerca de"
  ],
  imports: [
    CommonModule //  Necesario para usar directivas como *ngIf y *ngFor
  ],
  exports: [
    AboutComponent //  Exportamos el componente para su uso en otros módulos
  ]
})
export class UsersModule { }
