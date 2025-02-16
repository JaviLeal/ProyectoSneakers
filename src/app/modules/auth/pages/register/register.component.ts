import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @component RegisterComponent
 * @description Componente para el registro de nuevos usuarios.
 */
@Component({
  selector: 'app-register', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, FormsModule], // Módulos importados para su funcionamiento
  templateUrl: './register.component.html', // Plantilla HTML del componente
  styleUrl: './register.component.scss' // Hoja de estilos del componente
})
export class RegisterComponent {

  /**
   * @property {Object} registerData - Contiene los datos ingresados por el usuario para el registro.
   * @property {string} registerData.name - Nombre completo del usuario.
   * @property {string} registerData.email - Correo electrónico del usuario.
   * @property {string} registerData.password - Contraseña del usuario.
   */
  registerData = { name: '', email: '', password: '' };

  /**
   * @property {string} successMessage - Mensaje de éxito tras un registro exitoso.
   */
  successMessage = '';

  /**
   * @property {string} errorMessage - Mensaje de error en caso de que el registro falle.
   */
  errorMessage = '';

  /**
   * @method onRegister
   * @description Maneja el evento de registro de usuario.
   * @returns {void}
   */
  onRegister() {
    // Verifica si los campos están vacíos
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = '';
    } else {
      this.successMessage = '¡Se ha registrado correctamente!';
      this.errorMessage = '';

      // Reinicia los campos del formulario después de 2 segundos
      setTimeout(() => {
        this.registerData = { name: '', email: '', password: '' };
      }, 2000);
    }
  }
}
