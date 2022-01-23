import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino:string = ""
  Error:boolean=false;
  paises: Country[]=[];

  constructor(private PaisService:PaisService) { }

  buscar( termino:string){
    this.Error=false;
    this.termino=termino;
    this.PaisService.BuscarRegion(this.termino)
    .subscribe(paises=>{
      console.log(paises);
      this.paises=paises;
    }, (err)=>{
      this.Error=true;
      this.paises=[];
    });
  }
  sugerencias(termino:string){
      // to do: hacer las sugerencias
  }

}
