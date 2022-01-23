import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{ 
    margin-right: 5px;
  } ;
  `
  ]
})
export class PorRegionComponent {

  regiones:string[] = ["africa","americas","asia","europe","oceania"];
  regionActiva:string="";

  paises: Country[]=[];

  constructor(private PaisService:PaisService) { }

  activarRegion(region:string){
    if(region ===this.regionActiva){return;};
    this.regionActiva= region;
    this.paises=[];
    this.PaisService.BuscarRegion(this.regionActiva)
    .subscribe(paises=>{
      //console.log(paises);
      this.paises=paises;
    });
  }
  getClaseCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary' :'btn btn-outline-primary';
  }

}
