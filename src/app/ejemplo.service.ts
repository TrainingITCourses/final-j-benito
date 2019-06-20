import { Injectable } from '@angular/core';

@Injectable()
export class EjemploService {

  constructor() {
    console.log('se crea el servicio de ejemplo');
  }

  public metodo() {
    console.log('se carga el método');
  }
}
