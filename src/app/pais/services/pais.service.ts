import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interfaces';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl : string = `https://restcountries.com/v3.1`;
  HttpParams: any;

  get httpParams (){
    return new this.HttpParams().set ('fields' , 'name;capital;flags;traslations;populations')
  }

  constructor(private http: HttpClient)  { }

buscarPais(termino : string):Observable<Country[]>{     //funcion service de por pais

  const url = `${this.apiUrl}/name/${termino}`;
return this.http.get<Country[]>(url, {params : this.HttpParams});
}

buscarCapital(termino : string):Observable<Country[]>{    //funcion service de por capital

  const url = `${this.apiUrl}/capital/${termino}`;
return this.http.get<Country[]>(url, {params : this.HttpParams});
}

getPaisPorAlpha(termino : string):Observable<Country>{

  const url = `${this.apiUrl}/alpha/${termino}`;      //funcion service de ver pais
return this.http.get<Country>(url);
}

buscarRegion(region : string):Observable<Country[]>{     //funcion service de por region

  const url = `${this.apiUrl}/region/${region}`;
return this.http.get<Country[]>(url, {params : this.HttpParams});
}
  
}

