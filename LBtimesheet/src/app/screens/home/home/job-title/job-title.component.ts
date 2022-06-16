import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';
import { JobTitleService } from './job-title.service';
import { RenderJobTitleComponent } from './render-job-title/render-job-title.component';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnInit {

  columnDefs: ColDef[]  = [
 
    {  field: 'idJobTitle',headerComponent: RenderJobTitleComponent, cellRenderer:RenderJobTitleComponent , minWidth: 120, cellStyle:{'font-size': '10px' }},
    { headerName: 'Description', field: 'descriptionJobTitle', filter: true,editable: true,minWidth: 200, cellStyle:{'font-size': '14px'  }},
    { headerName: 'job title', field: 'nameJobTitle', filter: true,editable: true, minWidth: 200, cellStyle:{'font-size': '14px' }}, 
    { headerName: 'Active', field: 'activeJobTitle', filter: true, editable: true,minWidth: 880, cellStyle:{'font-size': '14px'  }},
    
    
  ];

  
 
  rowData:any;

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    private jobTitleService:JobTitleService) {

    this.jobTitleService.getJobTitle().subscribe((data:any)=>{
      this.singleton.listJobTitles=data;
      this.rowData=data;
    })

   
  }

  ngOnInit(): void {
  }

}
