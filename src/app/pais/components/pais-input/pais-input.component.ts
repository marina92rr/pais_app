import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [ 
  ]
})
export class PaisInputComponent {
 

@Output() onEnter: EventEmitter<string> = new EventEmitter();                      //evento se le suele llamar on....los eventos es para hacer llamadas a las funcione
@Output() onDebounce: EventEmitter<string> = new EventEmitter();              //output siempre emite 1 $event

debouncer: Subject<string> = new Subject();     //subject es un Observable

 termino: string = '';     
 
 
 ngOnInit(){
  this.debouncer
  .pipe(debounceTime(100))                      //transforma la salida ( como un tubo)  //300 las milesimas cuando dejas de escribir
  .subscribe(valor => {               //para hacer el input en html
    this.onDebounce.emit(valor);
  })
}

 buscar(){
  this.onEnter.emit(this.termino);              //el evento llama al termino de por pais
 };


 teclaPresionar(){
  this.debouncer.next(this.termino);      //para que por cada vez que se escibra se emita en consola
 }

}
