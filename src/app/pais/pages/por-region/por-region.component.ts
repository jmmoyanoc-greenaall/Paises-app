import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {margin-right: 5px}`
  ]
})
export class PorRegionComponent  {

  regiones:string[] = [
    'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'
  ]
  regionActiva:string = '';
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion(region:string){
    this.regionActiva=region;  
  }

  getClaseCSS(region:string): string{
    return  (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscar(region:string){

    let miObservador = {
      next: (region: Country[] ) => 
      { console.log(region);
        this.paises = (region);
      },
      error: (err: Error) => 
      { 
        this.paises = []
      },
      complete: () => console.log('Realizado')
    }
    
    this.paisService.buscarRegion(region).subscribe(miObservador);
  }

}
