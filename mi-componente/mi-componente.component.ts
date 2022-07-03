import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  edad:number;
  nombres:Array<string>;

  constructor() {
    this.edad  = 19;
    this.nombres = ['Joaquín','Lole','Mauricio','Ramona'];
  }

  

  ngOnInit(): void {
    console.log('Componente cargado');
  }

  aumentarEdad(){
    this.edad++;
  }

  disminuirEdad(){
    this.edad--;
  }

}
