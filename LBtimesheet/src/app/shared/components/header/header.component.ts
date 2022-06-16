import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SingletonService } from 'src/app/singleton.service';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropdownProjectSettings:any;
  dropdownTeamSettings:any;
  dropdownEmployeeSettings:any;
  listEmployees_Selected:any[]=[];
  listTeams_Selected:any[]=[];
  listProjects_Selected:any[]=[];
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();






  constructor(public router: Router,
    public singleton:SingletonService,
    public componentsService:ComponentsService) {}

  ngOnInit(): void {
    this.componentsService.getTeams().subscribe((data:any)=>{
      this.singleton.listTeams=data;
    })

    this.componentsService.getProjects().subscribe((data:any)=>{
      this.singleton.listProjects=data;
    })

    this.componentsService.getEmployees().subscribe((data:any)=>{
      this.singleton.listContacts=data;
    })

    
    this.dropdownEmployeeSettings  = {
      singleSelection: false,
      idField: 'idEmployee',
      textField: 'nameEmployee',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };    
    this.dropdownTeamSettings={
      singleSelection: false,
      idField: 'idTeam',
      textField: 'name',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    this.dropdownProjectSettings = {
      singleSelection: false,
      idField: 'idProject',
      textField: 'nameProject',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  onItemSelectEmployees(item:any){
    
    
    this.listEmployees_Selected.push(item);
    
    this.listEmployees_Selected.splice(this.listEmployees_Selected.length-1, 1);
    
    
  }
  onItemSelectTeams(item:any){
    this.listTeams_Selected.push(item);

    this.listTeams_Selected.splice(this.listTeams_Selected.length-1, 1);

    
  }

  onItemSelectProjects(item:any){
    this.listProjects_Selected.push(item);

    this.listProjects_Selected.splice(this.listProjects_Selected.length-1, 1);
  }
 
}
