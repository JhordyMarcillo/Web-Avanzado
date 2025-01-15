import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Leccion Practica - Gestion Cliente';

  mensajeResultado = '';
    listaClientes: any[] = [];
  
    // Formulario para la conversión de monedas
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
            this.mensajeResultado = 'Cliente actualizado';
          }
        } else {
          const nuevoCliente = this.formularioCliente.value;
          this.listaClientes.push(nuevoCliente);
          this.mensajeResultado = 'Cliente agregado';
        }
  
        // limpiar
        this.resetForm();
      } else {
        this.mensajeResultado = ' completa todos los campos correctamente.';
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
      this.mensajeResultado = 'Cliente eliminado exitosamente.';
    }
  
    // Limpiar el formulario
    resetForm() {
      this.formularioCliente.reset();
      this.clienteSeleccionado = null;
    }
  }
