import { Routes } from '@angular/router';
import { TropicalesComponent } from './tropicales/tropicales.component';
import { CitricasComponent } from './citricas/citricas.component';
import { BerriesComponent } from './berries/berries.component';
import { MangoComponent } from './tropicales/mango/mango.component';
import { PapayaComponent } from './tropicales/papaya/papaya.component';
import { FrambuesaComponent } from './berries/frambuesa/frambuesa.component';
import { MoraComponent } from './berries/mora/mora.component';
import { LimonComponent } from './citricas/limon/limon.component';
import { LimaComponent } from './citricas/lima/lima.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [

    {
        path: 'tropicales',
        component: TropicalesComponent,
    },

    {
        path: 'formulario',
        component: FormularioComponent
    },

    {
        path: 'citricas',
        component: CitricasComponent,

    },

    {
        path: 'berries',
        component: BerriesComponent,


    },

    {path: 'tropicales/mango', component: MangoComponent },

    {path: 'tropicales/papaya',component: PapayaComponent},

    {path: 'citricas/limon', component: LimonComponent},

    {path: 'citricas/lima', component: LimaComponent },

    {path: 'berries/frambuesa', component: FrambuesaComponent},

    {path: 'berries/mora', component: MoraComponent }
];
