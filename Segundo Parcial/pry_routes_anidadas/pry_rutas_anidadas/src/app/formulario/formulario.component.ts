import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  mensajeResultado = '';
  resultado = '';

  formularioFruta = new FormGroup({
    nombreFruta: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cantidad: new FormControl('', [Validators.required, Validators.min(1)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    categoria: new FormControl('', [Validators.required]),
    codigoFruta: new FormControl('', [Validators.required, this.onlyLettersValidator])
  });

  // Validador personalizado para solo letras
  onlyLettersValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const onlyLetters = /^[a-zA-Z\s]*$/;

    if (value && !onlyLetters.test(value)) {
      return { onlyLetters: true };
    }
    return null;
  }

  submit() {
    const { nombreFruta, cantidad, descripcion, categoria, codigoFruta } = this.formularioFruta.value;

    if (this.formularioFruta.valid) {
      this.mensajeResultado = 'Formulario enviado con éxito';
      this.resultado = `Fruta: ${nombreFruta}, Cantidad: ${cantidad}, Descripción: ${descripcion}, Categoría: ${categoria}, Código: ${codigoFruta}`;
    } else {
      this.mensajeResultado = 'El formulario contiene errores.';
    }
  }
}