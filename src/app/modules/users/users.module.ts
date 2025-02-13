import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importamos CommonModule
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule // ✅ Lo agregamos en imports para poder usar *ngFor
  ],
  exports: [
    AboutComponent
  ]
})
export class UsersModule { }
