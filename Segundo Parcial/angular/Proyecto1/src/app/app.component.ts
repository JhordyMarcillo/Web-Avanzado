import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//@decorador
@Component({
  selector: 'app-root', 
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//modificaciones
export class AppComponent {
  title = 'Proyecto1';
  
  
  /* Ejercicio 1*/
  /*nombre = 'Juanito Pedro';
  edad = '20';
  email = 'juanpedro@gmail.com';
  sueldos = [200, 300, 400];
  activo = true;

  esActivo(){
    if(this.activo)
      return 'Trabajador Activo'
    else
      return 'Trabajador Inactivo'
  }

  ultimosSueldos(){
    let suma = 0;
    
    for(let s = 0;  s < this.sueldos.length; s++){
        suma += this.sueldos[s];
    }
    return suma;
  }*/

    /* Ejercicio 2*/

    nombre = 'Jhordycito'
    edad = 16;

    articulos = [
      {
        codigo: 1,
        descripcion: 'mouse',
        precio: 45
      },

      {
        codigo: 2,
        descripcion: 'teclado',
        precio: 15
      },

      {
        codigo: 3,
        descripcion: 'computador',
        precio:600  
      }
    ]

    /*ejercicio 3*/

  generarAleatorio(){
    return Math.floor(Math.random()*3)+1;
  }
}
