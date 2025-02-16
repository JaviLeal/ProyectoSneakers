import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @component LoginComponent
 * @description Componente para el inicio de sesión de usuarios.
 */
@Component({
  selector: 'app-login', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, FormsModule], // Módulos importados para su funcionamiento
  templateUrl: './login.component.html', // Plantilla HTML del componente
  styleUrl: './login.component.scss' // Hoja de estilos del componente
})
export class LoginComponent {

  /**
   * @property {Object} loginData - Contiene las credenciales ingresadas por el usuario.
   * @property {string} loginData.email - Correo electrónico del usuario.
   * @property {string} loginData.password - Contraseña del usuario.
   */
  loginData = { email: '', password: '' };

  /**
   * @property {string} errorMessage - Almacena el mensaje de error si el inicio de sesión falla.
   */
  errorMessage: string = '';

  /**
   * @property {string} successMessage - Almacena el mensaje de éxito si el inicio de sesión es exitoso.
   */
  successMessage: string = '';

  /**
   * @method onLogin
   * @description Maneja el evento de inicio de sesión.
   * @returns {void}
   */
  onLogin() {
    // Verifica si los campos están vacíos
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = '';
    } else {
      this.successMessage = '¡Se ha logueado correctamente!';
      this.errorMessage = '';

      // Reinicia los campos del formulario después de 2 segundos
      setTimeout(() => {
        this.loginData = { email: '', password: '' };
      }, 2000);
    }
  }
}
