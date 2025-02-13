import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  // 👟 Lista de imágenes para el slider 
  images: string[] = [
    'images/Imagen1About.webp',
    'images/Imagen2About.jpg',
    'images/Imagen3About.webp'
  ];

  currentIndex: number = 0; // Índice de la imagen actual

  constructor(private ngZone: NgZone) {}

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
