import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from './singleton.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  

   constructor(private singleton:SingletonService) {
    const value: any = localStorage.getItem('accesToken');
    if(value !== null)
    this.singleton.token = value; 
       
  }

   
   
}

