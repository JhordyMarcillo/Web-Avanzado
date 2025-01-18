import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-inventario',
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './gestion-inventario.component.html',
  styleUrl: './gestion-inventario.component.css'
})

export class GestionInventarioComponent {

  title = 'Inventario';

    mensajeResultado = '';
    listaInventario: any[] = [];
  
    formularioZapato = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2), this.uniqueIdValidator]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      color: new FormControl('', [Validators.required, Validators.minLength(1)]),
      talla: new FormControl('', [Validators.required, Validators.minLength(1)]),
      marca: new FormControl('', [Validators.required, Validators.minLength(1)]),
      precioUnitario: new FormControl('', [Validators.required, Validators.min(1)]),
      stockInicial: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  
  
     seleccionado: any = null;
    
    submit() {
  
      if (this.formularioZapato.valid) {
        if (this.seleccionado) {
          const index = this.listaInventario.findIndex(zapato => zapato.id === this.seleccionado.id);
          if (index !== -1) {
            this.listaInventario[index] = this.formularioZapato.value;
            this.mensajeResultado = 'Zapato actualizado';
          }
        } else {
          const nuevoZapato = this.formularioZapato.value;
          this.listaInventario.push(nuevoZapato);
          this.mensajeResultado = 'Cliente agregado';
        }

        this.resetForm();
      } else {
        this.mensajeResultado = ' completa todos los campos correctamente.';
      }
    }

    editarCliente(zapato: any) {
      this.seleccionado = zapato;
      this.formularioZapato.patchValue(zapato);
    }
  
    //
    eliminarCliente(id: string) {
      this.listaInventario = this.listaInventario.filter(zapato => zapato.id !== id);
      this.mensajeResultado = 'Zapato eliminado exitosamente.';
    }
  
    // Limpiar el formulario
    resetForm() {
      this.formularioZapato.reset();
      this.seleccionado = null;
    }
  
    uniqueIdValidator(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      if (value && this.listaInventario.some((zapato) => zapato.id === value)) {
        return { uniqueId: true }; 
      }
      return null;
    }
  
  }
