import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-property';

  // variable
  nombre:string = '';
  
  fijarNombre1():void{
    this.nombre = 'Juan'
  }

  fijarNombre2():void{
    this.nombre = 'Pedro'
  }

}
