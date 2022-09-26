import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';             //termino es el de [(ngModel)] de html(lo que escribes para buscar)
  hayError : boolean = false;
  paises : Country[]= [];
  
  


  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }


  buscar(termino : string){
     
    this.hayError =false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe(paises => {

      console.log(paises);               //termino es el NgModel
      this.paises = paises;

    },(err) => {
      this.hayError = true;
      this.paises = [];
    });
  }
  sugerencias(termino:string){          //cuando de error si borras desaparece en 300 milisegundos la alerta
    this.hayError = false;

  }
}
