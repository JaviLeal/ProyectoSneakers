import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData = { email: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = '';
    } else {
      this.successMessage = '¡Se ha logueado correctamente!';
      this.errorMessage = '';
  
      setTimeout(() => {
        this.loginData = { email: '', password: '' };
      }, 2000);
    }
  }
}
  