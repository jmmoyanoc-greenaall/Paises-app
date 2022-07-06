import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent  {

  termino:string ='';
  hayError:boolean=false;
  hayPais:boolean=false;
  paises:Country[] = [];

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
    
  }
  
}
