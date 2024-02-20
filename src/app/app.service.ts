import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly apiUrl = "https://pokeapi.co/api/v2/berry-firmness/5"

  constructor(private _http: HttpClient) { }
  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }
}
