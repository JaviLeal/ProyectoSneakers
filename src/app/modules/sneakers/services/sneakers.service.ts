import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/api.service'; 
import { Sneaker } from '../../../interfaces/sneaker.interface';  

@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  private endpoint = 'sneakers';

  constructor(private api: ApiService) {}

  getAllSneakers(): Observable<Sneaker[]> {
    return this.api.get<Sneaker[]>(this.endpoint);
  }
}
