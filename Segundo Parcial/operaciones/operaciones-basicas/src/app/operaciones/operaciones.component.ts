import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  @Input() numero1: number = 0; //recibir datos del padre
  @Input() numero2: number = 0;
  
  //enviar datos al padre
  @Output() resultadoEvento = new EventEmitter<number>(); 

  //resultado actual
  resultado: number = 0;

  suma(){
    this.resultado = this.numero1 + this.numero2;
    this.resultadoEvento.emit(this.resultado);
  }

  resta(){
    this.resultado = this.numero1 - this.numero2;
    this.resultadoEvento.emit(this.resultado);
  }

  multiplicacion(){
    this.resultado = this.numero1 * this.numero2;
    this.resultadoEvento.emit(this.resultado);
  }

  division(){

    if(this.numero2 != 0){
      this.resultado = this.numero1 / this.numero2;
      this.resultadoEvento.emit(this.resultado);
    } else{
      alert("No es posible dividir para 0")
    }
  }

  limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
}
