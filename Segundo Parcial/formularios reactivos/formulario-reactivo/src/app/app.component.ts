import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversor-de-monedas';

  conversionResultado = '';
  mensajeResultado = '';

  // Formulario para la conversión de monedas
  formularioConversor = new FormGroup({
    monto: new FormControl('', [Validators.required, Validators.min(1)]),
    monedaOrigen: new FormControl('USD', [Validators.required]),
    monedaDestino: new FormControl('EUR', [Validators.required]),
    texto: new FormControl('', [Validators.required, Validators.minLength(13)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordNumerica: new FormControl('', [Validators.required, this.onlyNumbersValidator])
  });

  onlyNumbersValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const onlyNumbers = /^[0-9]*$/;

  if (value && !onlyNumbers.test(value)) {
    return { onlyNumbers: true }; // Error si contiene caracteres no numéricos
  }
  return null; // Sin errores
}

  // Tasas de conversión (ejemplo estático)
  tasasDeCambio: { [clave: string]: number } = {
    'USD_EUR': 0.97, //1dolar es a 0.85 euros
    'USD_MXN': 18.50,
    'EUR_USD': 1.18,
    'EUR_MXN': 21.70,
    'MXN_USD': 0.054,
    'MXN_EUR': 0.046
  };

  submit() {
    const { monto, monedaOrigen, monedaDestino } = this.formularioConversor.value;

    if (monto && monedaOrigen && monedaDestino) {
      const claveTasa = `${monedaOrigen}_${monedaDestino}`;
      const tasa = this.tasasDeCambio[claveTasa];

      if (tasa) {
        this.conversionResultado = (parseFloat(monto) * tasa).toFixed(2);
      } else {
        this.conversionResultado = 'Conversión no disponible';
      }
    }

    if (this.formularioConversor.valid) {
      // Lógica de conversión o manejo de datos
      this.mensajeResultado = 'Conversión realizada con éxito';
    } else {
      this.mensajeResultado = 'El formulario contiene errores.';
    }
  }
}
