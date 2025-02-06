import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneaker } from '../../../interfaces/sneaker.interface';  

@Injectable({
  providedIn: 'root'
})
export class SneakersApiService {
  private apiUrl = 'https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=nike&limit=20';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '566d735146msh49265486b1492b1p121ffbjsnb2ceb1142e16',  // Reemplaza con tu clave de RapidAPI
    'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  // Método para obtener sneakers
  getSneakers(): Observable<Sneaker[]> {
    const params = { keywords: 'nike', limit: '5' };
    return this.http.get<Sneaker[]>(this.apiUrl, { headers: this.headers, params });
  }
}
