import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert('Mensaje enviado correctamente');
      this.contact = { name: '', email: '', message: '' }; // Reiniciar formulario
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
