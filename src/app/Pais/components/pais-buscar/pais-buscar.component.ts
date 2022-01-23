import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrls: ['./pais-buscar.component.css']
})
export class PaisBuscarComponent implements OnInit{

  @Input() placeholder:string="";

  @Output() onEnter   :EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  Debouncer: Subject<string> = new Subject(); //el Subject es un observable (como el de las peticiones http)

  termino:string="";
  constructor() { }

  ngOnInit(){
    this.Debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }

  

  buscar(){
    this.onEnter.emit(this.termino);
  }


  teclaPresionada( event:any ){
    const valor = event.target.value;
    console.log(valor);
    //dos maneras: sacando la información del event o tomandola del valor de this.termino
    this.Debouncer.next(valor);

  }
}
