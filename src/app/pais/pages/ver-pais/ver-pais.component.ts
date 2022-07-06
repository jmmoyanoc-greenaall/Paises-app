import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit{

  constructor(private activateRouter: ActivatedRoute, private paisService:PaisService) { }
  pais:Country[] = [];
  ngOnInit():void{

    /* this.activateRouter.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
      )
    .subscribe( pais => this.pais = pais); */
    let miObservador = {
      next: (pais: Country[] ) => 
      { console.log(pais);
        this.pais = (pais);
      },
      complete: () => console.log('Realizado')
    }

     this.activateRouter.params.subscribe(({id}) => {
      console.log(id);
      this.paisService.getPaisPorAlpha(id).subscribe(miObservador);
    }) 
  }

}
