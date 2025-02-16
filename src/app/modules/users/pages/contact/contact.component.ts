import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @component ContactComponent
 * @description Componente de contacto que permite a los usuarios enviar mensajes a la empresa.
 */
@Component({
  selector: 'app-contact', // Selector del componente
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule, FormsModule], // Importa módulos necesarios para formularios y funcionalidades básicas de Angular
  templateUrl: './contact.component.html', // Plantilla HTML del componente
  styleUrl: './contact.component.scss' // Hoja de estilos del componente
})
export class ContactComponent {

  /**
   * @property {Object} contact - Objeto que almacena los datos del formulario de contacto.
   * @property {string} contact.name - Nombre del usuario.
   * @property {string} contact.email - Correo electrónico del usuario.
   * @property {string} contact.message - Mensaje del usuario.
   */
  contact = {
    name: '',
    email: '',
    message: ''
  };

  /**
   * @method sendMessage
   * @description Envía el mensaje del usuario si todos los campos están completos.
   * Si falta algún campo, muestra una alerta pidiendo completar el formulario.
   */
  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert('Mensaje enviado correctamente');
      this.contact = { name: '', email: '', message: '' }; // Reiniciar formulario
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
