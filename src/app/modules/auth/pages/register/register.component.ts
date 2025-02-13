import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData = { name: '', email: '', password: '' }; 

  successMessage = '';
  errorMessage = '';

  onRegister() {
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = '';
    } else {
      this.successMessage = '¡Se ha registrado correctamente!';
      this.errorMessage = '';

      setTimeout(() => {
        this.registerData = { name: '', email: '', password: '' };
      }, 2000);
    }
  }
}