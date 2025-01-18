import { Routes } from '@angular/router';
import { GestionInventarioComponent } from './gestion-inventario/gestion-inventario.component';
import { OperacionesInventarioComponent } from './operaciones-inventario/operaciones-inventario.component';
import { RegistroVarianteComponent } from './registro-variante/registro-variante.component';


export const routes: Routes = [
{
    path: 'gestion-inventario',
    component: GestionInventarioComponent
}, 

{
    path: 'operaciones-inventario',
    component: OperacionesInventarioComponent
}, 

{
    path: 'registro-variante',
    component: RegistroVarianteComponent
}];