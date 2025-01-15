import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OperacionesComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'operaciones-basicas';

  numero1: number = 0;
  numero2: number = 0;
  resultadoPadre: number = 0; //recibe desde el hijo

  limpiarPadre(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultadoPadre = 0;
  }


  actualizarResultado(resultado:number){
    this.resultadoPadre = resultado;
  }
}
