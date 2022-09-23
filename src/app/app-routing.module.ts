import { NgModule } from '@angular/core';   //decorador definido
import { RouterModule, Routes } from '@angular/router';  //framework integrado en el paquete libreria


import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//const = [array] [objeto{componente}] + [objeto{componente}]...
const routes: Routes = [

    {
        path: '',                        //busqueda
        component: PorPaisComponent,    // componente
        pathMatch: 'full'               //donde cae
    },
    {
        path: 'region',                      //busqueda
        component: PorRegionComponent,    //componente
    },
    {
        path: 'capital',                   //busqueda
        component: PorCapitalComponent,    // componente
    },
    {
        path: 'pais/:id',             //busqueda/el pais que buscas
        component: VerPaisComponent,        // componente
    },
    {
        path: '**',             //cualquier otra busqueda que no sean las anteriores
        redirectTo: ''        // redirige a porpaisComponent| error 404
    },
];

@NgModule({

    imports: [
        RouterModule.forRoot(routes)           //conf de las rutas root( principal) child(hijas) llamamos a la const
    ],
    exports:[
        RouterModule
    ]


})     //Decorador : configuracion del objeto
export class AppRoutingModule{



}

