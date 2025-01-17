import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0,
  }

  articulos = [
    {codigo: 1, descripcion: "papas", precio: 12.50},
    {codigo: 2, descripcion: "manzanas", precio: 2.50},
    {codigo: 3, descripcion: "peras", precio: 8.12},
  ]

  //metodos
  hayRegistros(){
    return this.articulos.length > 0;
  }

  //borrar
  borrarRegistros(codigo:number){
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i,1);
        return;
      }
    }
  }

  //agregar 
  agregarRegistros(){
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        alert('existe el articulo');
        return;
      }
    }
    
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio
    });

      this.art.codigo = 0,
      this.art.descripcion = "",
      this.art.precio = 0;
    
  }

  //metodo seleccionar
  seleccionarRegistros(art: {codigo:number, descripcion:string, precio:number}){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  //metodo modificar
  modificarRegistros() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;

        this.art.codigo = 0;
        this.art.descripcion = "";
        this.art.precio = 0;
        return;
      }
    }
    alert('Artículo no encontrado para modificar');
  }
}
