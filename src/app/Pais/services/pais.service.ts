import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.com/v3.1";

  get httpParams(){
    return new HttpParams().set('fields','name,capital,population,flags,cca2');
  }

  constructor(private http:HttpClient) {//se importa el cliente a usar
  }

  BuscarPais(Pais:string):Observable<Country[]>{
    const url= `${this.apiUrl}/name/${Pais}`;

    return this.http.get<Country[]>(url, { params:this.httpParams });
    
  }
  BuscarCapital(Capital:string):Observable<Country[]>{
    const url= `${this.apiUrl}/capital/${Capital}`;

    return this.http.get<Country[]>(url, { params:this.httpParams });
    
  }

  BuscarRegion(Region:string):Observable<Country[]>{
    //const params =new HttpParams()                        //esto pasó a ser declarado en un getter
    //.set('fields','name,capital,population,flags,cca2');
    const url= `${this.apiUrl}/region/${Region}`;
    return this.http.get<Country[]>(url, { params:this.httpParams });//.pipe(tap(console.log));
    
  }
  BuscarPaisPorCod(Codigo:string):Observable<Country[]>{
    const url= `${this.apiUrl}/alpha/${Codigo}`;
    return this.http.get<Country[]>(url);
  }
}
