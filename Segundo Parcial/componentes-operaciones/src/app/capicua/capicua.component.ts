import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capicua',
  imports: [FormsModule, CommonModule],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.css'
})
export class CapicuaComponent {
 //variables
number:number = 0;
mensaje: string = "";

  calcularCapicua(): void{

  }
}
