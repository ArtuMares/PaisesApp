import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;
  
  constructor(private activatedRoute: ActivatedRoute, private PaisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({idPais})=> this.PaisService.BuscarPaisPorCod(idPais)) //switchMap para hacer un subscribe de otro subscribe
      ,tap(console.log)
      )
    .subscribe(pais=> {
      this.pais=pais[0];
      console.log(this.pais);
    });
    /*this.activatedRoute.params.subscribe(({idPais})=>{    //otra manera de hacerlo, se hace un subscribe dentro de otro subscribe
      console.log(idPais);
      this.PaisService.BuscarPaisPorCod(idPais)
      .subscribe(pais=>{
        console.log(pais);
      });
    });*/
  }


}
