import { Component } from '@angular/core';

/**
 * @component HomeComponent
 * @description Componente principal de la página de inicio. 
 * Muestra una introducción a la tienda de zapatillas con información relevante 
 * sobre calidad, envíos y atención al cliente.
 */
@Component({
  selector: 'app-home', // Selector utilizado en la plantilla para instanciar este componente
  standalone: true, // Indica que el componente es independiente y no necesita un módulo específico
  imports: [], // Actualmente no requiere importar módulos adicionales
  templateUrl: './home.component.html', // Plantilla HTML del componente
  styleUrl: './home.component.scss' // Hoja de estilos asociada al componente
})
export class HomeComponent {
  // Este componente actualmente no requiere lógica adicional.
}
