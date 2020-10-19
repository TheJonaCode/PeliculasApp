import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) {}

  getCartelera():Observable<CarteleraResponse>{

    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=059924efef2fae6fb36850399ab9b10d&language=es-ES&page=1');
  }

}
