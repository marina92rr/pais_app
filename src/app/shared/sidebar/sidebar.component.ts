import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles : [
    `
      li{
        cursor:pointer;       
      }
    `
  ] 
})  // En estilos :solo los li del componente de la columna se cree el pointer cursor(manita)



export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
