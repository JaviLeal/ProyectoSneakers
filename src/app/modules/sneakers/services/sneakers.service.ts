import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  private apiUrl = 'https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=nike'; // 🔹 Reemplaza con la URL de la API real

  constructor(private http: HttpClient) {}

  getSneakers(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '566d735146msh49265486b1492b1p121ffbjsnb2ceb1142e16', // 🔹 Reemplaza con tu clave API
      'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com' // 🔹 Reemplaza con tu host API
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
