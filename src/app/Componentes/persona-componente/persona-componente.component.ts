import { Component, OnInit } from '@angular/core';
import { Personas } from '../../Modelos/personas'

@Component({
  
  selector: 'app-persona-componente',
  templateUrl: 'persona-componente.component.html',
  styleUrls: ['./persona-componente.component.css']
})
export class PersonaComponenteComponent /*implements OnInit*/ {

  personas: Personas= new Personas('Victor','Escobedo',19,'Hombre');

/*
  constructor() {

    this.titulo="VICTOR ALEJANDRO ESCOBEDO"

   }

  ngOnInit() {
  }


  */
}
