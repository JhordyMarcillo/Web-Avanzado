import { Component } from '@angular/core';

@Component({
  selector: 'app-primo',
  imports: [],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})

export class PrimoComponent {
  // variable numero
  number: number = 0;
  mensaje: string = '';

  // función para verificar si es primo
  esPrimo(): void {
    if (this.number <= 1) {
      this.mensaje = `${this.number} no es un número primo.`;
      return;
    }

    for (let i = 2; i <= Math.sqrt(this.number); i++) {
      if (this.number % i === 0) {
        this.mensaje = `${this.number} no es un número primo.`;
        return;
      }
    }

    this.mensaje = `${this.number} es un número primo.`;
  }
}
