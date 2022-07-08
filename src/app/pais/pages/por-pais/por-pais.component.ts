import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
        cursor: Pointer;
      }
    `
  ]
  
})
export class PorPaisComponent  {

  termino:string ='';
  hayError:boolean=false;
  hayPais:boolean=false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerenicas:boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    console.log(this.termino = termino);

    let miObservador = {
      next: (pais: Country[] ) => 
      { console.log(pais);
        this.paises = (pais);
        this.hayPais = true
      },
      error: (err: Error) => 
      { this.hayError=true;
        this.paises = []
      },
      complete: () => console.log('Realizado')
    }
    
    this.paisService.buscarPais(this.termino).subscribe(miObservador);
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerenicas=true;

    let miObservadorS = {
      next: (paises:Country[] ) => 
      { console.log(paises);
        this.paisesSugeridos=paises.splice(0,5)
      },
      error: (err: Error) => 
      { this.paisesSugeridos = []
      },
      complete: () => console.log('Realizado')
    }
    this.paisService.buscarPais(termino).subscribe(miObservadorS);
  }

  buscarSugerido(termino:string){
    this.buscar(termino);

  }
  
}
