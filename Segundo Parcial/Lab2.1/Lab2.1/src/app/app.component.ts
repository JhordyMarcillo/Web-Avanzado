import { Component } from '@angular/core';
import { GestionInventarioComponent } from './gestion-inventario/gestion-inventario.component';
import { OperacionesInventarioComponent } from './operaciones-inventario/operaciones-inventario.component';
import { RegistroVarianteComponent } from './registro-variante/registro-variante.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RegistroVarianteComponent, GestionInventarioComponent, OperacionesInventarioComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab2.1';
}
