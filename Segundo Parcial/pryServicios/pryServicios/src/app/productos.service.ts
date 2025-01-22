import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  retornar(){
    return [
      {
        codigo: 1,
        nombre: "computador",
        precio: 231.34
      },

      {
        codigo: 2,
        nombre: "celular",
        precio: 131.34
      },

      {
        codigo: 3,
        nombre: "auriculares",
        precio: 23.4
      }
    ]
  }
}
