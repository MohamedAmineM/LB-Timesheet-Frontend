import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SingletonService } from 'src/app/singleton.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dropdownEmployeeSettings:any;
  listEmployees_Selected:any[]=[];

  title = 'LBtimesheet';

  sideBarOpen = false;

  constructor(private router: Router,
    public singleton:SingletonService,
    ) {

      

    }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
 
  ngOnInit(): void {

    this.dropdownEmployeeSettings  = {
      singleSelection: false,
      idField: 'idEmployee',
      textField: 'nameEmployee',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  goToScreen(screen: string) : void{
    this.router.navigate([screen]);
    this.sideBarOpen = !this.sideBarOpen;
  }

 
 
}
