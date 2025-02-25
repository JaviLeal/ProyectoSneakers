import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-checkout',
  standalone: true, 
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/(\\d{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      address: ['', Validators.required]
    });
  }

  submitPayment(): void {
    // Simular validación y procesamiento de pago
    if (this.isFormValid()) {
      alert('El pago se ha realizado correctamente, ¡muchas gracias por confiar en nosotros!');
      
      // Vaciar el carrito en localStorage
      localStorage.removeItem('cart');

      // Redirigir al carrito (vacío)
      this.router.navigate(['/']);
    } else {
      alert('⚠️ Por favor, completa todos los campos correctamente');
    }
  }

  private isFormValid(): boolean {
    // Simular una validación de formulario (puedes personalizarla)
    return true;
  }
}

