import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = ""
  Error:boolean=false;
  paises: Country[]=[];

  constructor(private PaisService:PaisService) { }


  buscar( termino:string){
    this.Error=false;
    this.termino=termino;
    
    this.PaisService.BuscarPais(this.termino)
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
