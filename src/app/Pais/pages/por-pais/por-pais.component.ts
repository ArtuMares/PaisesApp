import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ""
  Error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:boolean=false;

  constructor(private PaisService: PaisService) { }


  buscar(termino: string) {
    this.Error = false;
    this.termino = termino;

    this.PaisService.BuscarPais(this.termino)
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.Error = true;
        this.paises = [];
      });
  }
  sugerencias(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias=true;
    this.paisesSugeridos = [];
    this.PaisService.BuscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = [])
  };

  buscarSugerencias(termino:string){
    this.buscar(termino);
    this.mostrarSugerencias=false;
  }
}
