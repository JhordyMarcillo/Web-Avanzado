import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';


export const routes: Routes = [
    //indica el nombre de la ruta y propiedades del componente
    {
        path: 'contacto',
        component: ContactoComponent
    },

    {
        path: 'acerca-de',
        component: AcercaDeComponent
    }
];


