import { Component, OnInit } from '@angular/core';
import { pulse, zoomInOut } from 'src/app/animations/app-animations';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations:[zoomInOut,pulse]
})
export class WorksComponent implements OnInit{

  proyectos:Array<Proyecto> = new Array<Proyecto>(); 

  ngOnInit() {

  for(let i = 1;i<=5;i++)
  {
    let proyecto = new Proyecto(); 
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/docker-4.svg"); 
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"); 
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"); 
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/spring-3.svg"); 
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/java-14.svg")
    proyecto.stack.push("https://cdn.worldvectorlogo.com/logos/mysql-logo.svg")
    this.proyectos.push(proyecto); 
  }  
  console.log(this.proyectos[0])
}
  
}
