import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes'; // Verifica que esta ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // Habilita fetch en HttpClient
    provideRouter(routes, withComponentInputBinding()), // Usa el array de rutas exportado
  ]
};
