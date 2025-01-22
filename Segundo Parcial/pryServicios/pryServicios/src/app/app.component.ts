import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from './productos.service';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pryServicios';

  productos: any; //almacenar cualquier dato

  //crear constructor para inicializar
  constructor(private productoServicio: ProductosService){
    this.productos = this.productoServicio.retornar();//llama al producto del productservice
  }
}
