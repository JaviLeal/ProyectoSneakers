import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';

/**
 * @component AboutComponent
 * @description Componente que muestra información sobre la historia, misión y visión de la empresa.
 * También incluye un slider de imágenes automático.
 */
@Component({
  selector: 'app-about', // Selector del componente
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule], // Importa CommonModule para utilizar funcionalidades básicas de Angular
  templateUrl: './about.component.html', // Plantilla HTML del componente
  styleUrl: './about.component.scss' // Hoja de estilos del componente
})
export class AboutComponent implements OnInit {

  /**
   * @property {string[]} images - Lista de imágenes para el slider.
   */
  images: string[] = [
    'images/Imagen1About.webp',
    'images/Imagen2About.jpg',
    'images/Imagen3About.webp'
  ];

  /**
   * @property {number} currentIndex - Índice de la imagen actual en el slider.
   */
  currentIndex: number = 0;

  /**
   * @constructor
   * @param {NgZone} ngZone - Utilizado para manejar el cambio de imágenes fuera de la zona de Angular y mejorar el rendimiento.
   */
  constructor(private ngZone: NgZone) {}

  /**
   * @method ngOnInit
   * @description Método del ciclo de vida que se ejecuta al inicializar el componente.
   * Inicia un intervalo que cambia la imagen del slider cada 2 segundos.
   */
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        });
      }, 2000);
    });
  }
}
