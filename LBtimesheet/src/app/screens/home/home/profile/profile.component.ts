import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';
import { ProfileService } from './profile.service';
import { RenderProfileComponent } from './render-profile/render-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  columnDefs: ColDef[]  = [
 
    {  field: 'idProfile',headerComponent: RenderProfileComponent, cellRenderer:RenderProfileComponent , minWidth: 140, cellStyle:{'font-size': '10px' }},
    { headerName: 'name', field: 'nameProfile', filter: true,editable: true,minWidth: 320, cellStyle:{'font-size': '14px'  }},
    { headerName: 'description', field: 'descriptionProfile', filter: true ,editable: true,minWidth: 420, cellStyle:{'font-size': '14px'  }},
    { headerName: 'Active', field: 'activeProfile', filter: true, editable: true,minWidth: 410, cellStyle:{'font-size': '14px'  }},
   
    
  ];

  
  
  
  rowData:any;
  
  constructor(private profileService: ProfileService,
    private singleton:SingletonService) {

    this.profileService.getProfiles().subscribe((data: any) => {
      this.rowData = data;
      this.singleton.listProfiles = data;
    });

    this.profileService.getRoles().subscribe((data: any) => {
      data = data.sort((a: any,b: any) => a.lblName.localeCompare(b.lblName));
      data.map((a: any) => {
        a.checked = false;
        return a;
      })
      this.singleton.listRoles = data;
    });
       
  }

  ngOnInit(): void {
  }

}
