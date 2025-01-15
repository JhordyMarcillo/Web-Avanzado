import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factorial',
  imports: [FormsModule, CommonModule],
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {
  //variable numero
  number: number = 0;
  mensaje: string= '';

  //funcion calcular factorial
  calcularFactorial(): void{
    if(this.number < 0 ){
      this.mensaje = 'El número no puede ser negativo';
    }

      let factorial = 1;
      for (let i = 1; i <= this.number; i++) {
        factorial *= i;
      }
      this.mensaje = `El factorial de ${this.number} es ${factorial}`;
  }
}