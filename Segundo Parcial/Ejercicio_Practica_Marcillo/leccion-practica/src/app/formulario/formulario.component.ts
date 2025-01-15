import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class NombreComponent {

  title = 'Leccion Practica - Gestion Cliente';

  mensajeResultado = '';
  listaClientes: any[] = [];

  // Formulario para la conversión de
  formularioCliente = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    direccion: new FormControl('', [Validators.required]),
    grupo: new FormControl('', [Validators.required]),
  });


  clienteSeleccionado: any = null;
  
  submit() {

    //metodo de crear, actualizar
    if (this.formularioCliente.valid) {
      if (this.clienteSeleccionado) {
        const index = this.listaClientes.findIndex(cliente => cliente.cedula === this.clienteSeleccionado.cedula);
        if (index !== -1) {
          this.listaClientes[index] = this.formularioCliente.value;
        }
      } else {
        const nuevoCliente = this.formularioCliente.value;
        this.listaClientes.push(nuevoCliente);
      }

      // limpiar
      this.resetForm();
    }
  }

  //metodo editar
  editarCliente(cliente: any) {
    this.clienteSeleccionado = cliente;
    this.formularioCliente.patchValue(cliente);
  }

  //
  eliminarCliente(cedula: string) {
    this.listaClientes = this.listaClientes.filter(cliente => cliente.cedula !== cedula);
  }

  // Limpiar el formulario
  resetForm() {
    this.formularioCliente.reset();
    this.clienteSeleccionado = null;
  }
}
