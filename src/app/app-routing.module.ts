import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './Pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './Pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './Pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './Pais/pages/ver-pais/ver-pais.component';

const routes:Routes = [
    { //ruta para buscar por pais (predeterminada)
        path:"",
        component:PorPaisComponent,
        pathMatch: "full"
    },
    { //ruta para buscar por region
        path:"region",
        component:PorRegionComponent
    },
    {   //ruta para buscar por capital
        path:"capital",
        component:PorCapitalComponent
    },
    { //ruta para mostrar la info de un pais
        path:"pais/:idPais",
        component:VerPaisComponent
    },
    { //ruta excepcion (si no se ingresó ningún otra de las rutas)
        path:"**",
        redirectTo:""
    },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],

})

export class AppRoutingModule{

}