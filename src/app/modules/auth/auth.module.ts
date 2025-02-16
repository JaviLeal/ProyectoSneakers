import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @module AuthModule
 * @description Módulo encargado de gestionar la autenticación de usuarios.
 * Contiene los componentes, servicios y rutas relacionadas con el proceso de autenticación.
 */
@NgModule({
  declarations: [], 
  imports: [
    CommonModule, // Proporciona funcionalidades comunes como *ngIf y *ngFor
    RouterModule  // Permite definir rutas dentro del módulo de autenticación
  ]
})
export class AuthModule { }
