import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ubigeo } from '../model/ubigeo';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  url: string = "http://localhost:8080/ubigeos";

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<Ubigeo[]>(this.url);
  }
}
