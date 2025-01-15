import { Component } from '@angular/core';
import { PrimoComponent } from './primo/primo.component';
import { FactorialComponent } from './factorial/factorial.component';

@Component({
  selector: 'app-root',
  imports: [FactorialComponent, PrimoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes-operaciones';  

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
