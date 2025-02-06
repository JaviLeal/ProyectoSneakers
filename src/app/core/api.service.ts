// src/app/modules/sneakers/services/sneakers-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneaker } from '../interfaces/sneaker.interface';  


@Injectable({
  providedIn: 'root'
})
export class SneakersApiService {
  private apiUrl = 'https://sneaker-database-stockx.p.rapidapi.com/getproducts'; // URL de la API
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '566d735146msh49265486b1492b1p121ffbjsnb2ceb1142e16', // Asegúrate de reemplazar esto con tu API Key
    'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  // Método para obtener los sneakers de la API
  getSneakers(): Observable<Sneaker[]> {
    const params = { keywords: 'nike', limit: '5' }; // Puedes ajustar los parámetros según lo que necesites
    return this.http.get<Sneaker[]>(this.apiUrl, { headers: this.headers, params });
  }
}
