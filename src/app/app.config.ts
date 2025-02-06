import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Verifica que esta ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // Habilita fetch en HttpClient
    provideRouter(routes), // Usa el array de rutas exportado
  ]
};
