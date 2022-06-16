import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';
import { ProjectService } from './project.service';
import { RenderProjectComponent } from './render-project/render-project.component';
import { RenderTeamComponent } from './render-team/render-team.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  columnDefs: ColDef[]  = [
 
    {  field: 'idProject',headerComponent: RenderProjectComponent, cellRenderer:RenderProjectComponent , minWidth: 30, cellStyle:{'font-size': '10px' }},
    { headerName: 'Name', field: 'nameProject', filter: true,editable: true, minWidth: 70, cellStyle:{'font-size': '14px' }},
    { headerName: 'TeamLead', field: 'nameTeamLead', filter: true,editable: true, minWidth: 50, cellStyle:{'font-size': '14px' }},
    { headerName: 'startDate', field: 'dateString', filter: true,editable: true,minWidth: 50, cellStyle:{'font-size': '14px'  }},
    
   
    
  ];
  columnDefs2: ColDef[]  = [
 
    {  field: 'idTeam',headerComponent: RenderTeamComponent, cellRenderer:RenderTeamComponent , minWidth: 30, cellStyle:{'font-size': '10px' }},
    { headerName: 'Name', field: 'name', filter: true,editable: true, minWidth: 70, cellStyle:{'font-size': '14px' }},
    { headerName: 'description', field: 'description_Team', filter: true,editable: true,minWidth: 50, cellStyle:{'font-size': '14px'  }},
    { headerName: 'active', field: 'active_Team', filter: true, editable: true,minWidth: 50, cellStyle:{'font-size': '14px'  }},
   
    
  ];

  
  
  rowData:any;
  rowData2:any;
  

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    private projectService:ProjectService) {

 
    
      this.projectService.getProjects().subscribe((data: any) => {
        data.map((item:any)=>{
          item.dateString=new Date(item.startDateProject).toDateString();

          return item;
        })
        

        this.singleton.listProjects=data;
        this.rowData = data;
        
        
      });

      this.projectService.getTeams().subscribe((data: any) => {
        this.singleton.listTeams=data;
        this.rowData2 = data;
        
      });

      console.log( this.singleton.listTeams)


      this.projectService.getEmployees().subscribe((data: any) => {
        this.singleton.listContacts = data;
        
        
        
      });

     
     
       
  }

  ngOnInit(): void {
  }

}
