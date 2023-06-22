import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = "http://localhost:8081/clientes";

  constructor(private httpClient: HttpClient) { }

  guardar(cliente: Cliente) {
    return this.httpClient.post<Cliente>(this.url, cliente);
  }
}
