
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [ 
  ] 
})
export class VerPaisComponent implements OnInit {

  pais! : Country[];      //! le estas diciendo que pais puede ser nulo.

  constructor(
    private activateRoute: ActivatedRoute, 
    private paisService : PaisService)
     { }

  ngOnInit(): void {


    this.activateRoute.params
   .pipe(
    switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
    tap(console.log)
   )
    .subscribe(pais => this.pais = pais);


    //--------esta funcion es la misma que la de arriba
   /*this.activateRoute.params
    .subscribe(({id}) => {
      console.log(id);

      this.paisService.getPaisPorAlpha(id)
      .subscribe( pais =>{
        console.log(pais);
      })
    }): */
  }

}
