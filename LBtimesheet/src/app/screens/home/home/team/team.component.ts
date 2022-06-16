import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';
import { RenderProjectComponent } from './render-project/render-project.component';
import { RenderTeamComponent } from './render-team/render-team.component';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  columnDefs: ColDef[]  = [
 
    {  field: 'idTeam',headerComponent: RenderTeamComponent, cellRenderer:RenderTeamComponent , minWidth: 120, cellStyle:{'font-size': '10px' }},
    { headerName: 'Name', field: 'name', filter: true,editable: true, minWidth: 120, cellStyle:{'font-size': '14px' }},
    { headerName: 'description', field: 'description_Team', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'active', field: 'active_Team', filter: true, editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
   
    
  ];

  columnDefs2: ColDef[]  = [
 
    {  field: 'idProject',headerComponent: RenderProjectComponent, cellRenderer:RenderProjectComponent , minWidth: 120, cellStyle:{'font-size': '10px' }},
    { headerName: 'Name', field: 'nameProject', filter: true,editable: true, minWidth: 120, cellStyle:{'font-size': '14px' }},
    { headerName: 'startDate', field: 'startDateProject', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    
   
    
  ];

  
  
  rowData:any;
  rowData2:any;

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    private teamService:TeamService) {

      this.teamService.getTeams().subscribe((data:any)=>{
        this.rowData=data;
      })
      this.teamService.getProjects().subscribe((data:any)=>{
        this.rowData2=data;
      })

    
       
  }

  ngOnInit(): void {
  }

}
