import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url: string = "http://localhost:8081/proveedores";

  constructor(private httpClient: HttpClient) { }

  guardar(proveedor: Proveedor) {
    return this.httpClient.post<Proveedor>(this.url, proveedor);
  }
}
