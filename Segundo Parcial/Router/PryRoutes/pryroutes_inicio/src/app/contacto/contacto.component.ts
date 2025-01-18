  import { Component } from '@angular/core';
  import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

  @Component({
    selector: 'app-contacto',
    imports: [ReactiveFormsModule],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css'
  })

  export class ContactoComponent {

    datos = '';

    formularioContacto = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      mensaje: new FormControl(''),
    });

    submit(){
      this.datos = `Nombre = ${this.formularioContacto.value.nombre}; \n 
                    Email = ${this.formularioContacto.value.email}; \n
                    Mensaje = ${this.formularioContacto.value.mensaje}`;
    }

  }
