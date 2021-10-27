import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VerDadosService {
  constructor(private http: HttpClient) { }

  coletarDados() {
    return this.http.get<{ id: number, name: string, email: string, address:any }[]>('https://jsonplaceholder.typicode.com/users');
  }
}
