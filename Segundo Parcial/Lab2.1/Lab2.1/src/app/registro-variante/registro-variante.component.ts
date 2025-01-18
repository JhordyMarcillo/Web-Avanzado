import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-variante',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './registro-variante.component.html',
  styleUrl: './registro-variante.component.css'
})
export class RegistroVarianteComponent {

  formularioZapato: FormGroup;
  colores: string[] = ['Rojo', 'Azul', 'Negro', 'Blanco', 'Verde'];
  tallas: number[] = [35, 36, 37, 38, 39, 40, 41, 42, 43];
  colorSeleccionado = false;
  zapatosRegistrados: any[] = []; // Lista de zapatos registrados

  constructor() {
    this.formularioZapato = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      colores: new FormControl([]), // Almacena los colores seleccionados
      talla: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  toggleColor(color: string) {
    const coloresSeleccionados = this.formularioZapato.get('colores')?.value || [];
    const index = coloresSeleccionados.indexOf(color);
    if (index > -1) {
      coloresSeleccionados.splice(index, 1);
    } else {
      coloresSeleccionados.push(color);
    }
    this.formularioZapato.get('colores')?.setValue(coloresSeleccionados);
    this.colorSeleccionado = coloresSeleccionados.length > 0;
  }

  registrarZapato() {
    if (this.formularioZapato.valid) {
      const nuevoZapato = this.formularioZapato.value;
      this.zapatosRegistrados.push(nuevoZapato); 
      alert('Zapato registrado exitosamente');
      this.resetForm();
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  resetForm() {
    this.formularioZapato.reset();
    this.colorSeleccionado = false;
  }
}
