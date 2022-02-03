import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {
  heroes:string []=['spiderman','CapitanAmerica','Ironman','Hulk','Thor dios del trueno'];
  heroeBorrado: string ='';
  
  borrarHeroe(){
    this.heroeBorrado= this.heroes.shift() || '';
    
  }


}
