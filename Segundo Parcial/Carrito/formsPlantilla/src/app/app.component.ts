import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';


@Component({
  selector: 'app-root',
  //Router muestra el contenido dinamico basado en las rutas
  //FormsModule habilita el enlace de vinculacion de datos
  imports: [FormsModule, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'formsPlantilla';

}
