import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.com/v3.1";

  constructor(private http:HttpClient) {//se importa el cliente a usar
  }

  BuscarPais(termino:string):Observable<Country[]>{
    const url= `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
    
  }
  BuscarCapital(termino:string):Observable<Country[]>{
    const url= `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
    
  }

  BuscarRegion(termino:string):Observable<Country[]>{
    const url= `${this.apiUrl}/region/${termino}`;

    return this.http.get<Country[]>(url);
    
  }
  BuscarPaisPorCod(termino:string):Observable<Country[]>{
    const url= `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
