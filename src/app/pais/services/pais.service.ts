import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';
  private apiUrlCapital:string = 'https://restcountries.com/v2';
  private filtro:string = '?fields=name,capital,flags,population,altSpellings';
  private httpParams = new HttpParams().set('fields', 'name,capital,flags,population,altSpellings');
  
  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string): Observable<Country[]>{
    
    const url = `${this.apiUrlCapital}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id:string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string): Observable<Country[]>{ 
    const url = `${this.apiUrlCapital}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

}
