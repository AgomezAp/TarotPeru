import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from '../interfaces/datos';
import { environment } from '../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.appUrl = environment.apiUrl;
    this.apiUrl = 'api/registrar';
  }
  registrar(datos: Datos): Observable<any> {
    return this.http.post(this.appUrl + this.apiUrl, datos);
  }
}
