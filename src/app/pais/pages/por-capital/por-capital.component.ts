import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

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
    
    this.paisService.buscarCapital(this.termino).subscribe(miObservador);
  }
}
