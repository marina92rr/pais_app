import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor : pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';             //termino es el de [(ngModel)] de html(lo que escribes para buscar)
  hayError : boolean = false;
  paises : Country[]= [];

  
  paisesSugeridos : Country[]= [];
  mostrarSugeridos : boolean = false;
  
  


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
   
    this.mostrarSugeridos = true
   this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0.3),
    (err) =>this.paisesSugeridos = []
    );
  }

  buscarSugerido( termino : string){

    this.buscar( termino);
    
  }
}
