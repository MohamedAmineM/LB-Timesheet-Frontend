

import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,Module} from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { ContactsService } from './contacts.service';
import { RenderContactComponent } from './render-contact/render-contact.component';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

 columnDefs: ColDef[]  = [
 
    {  field: 'idEmployee',headerComponent: RenderContactComponent, cellRenderer:RenderContactComponent , minWidth: 50, cellStyle:{'font-size': '10px' }},
    { headerName: 'Cin', field: 'cinEmployee', filter: true,editable: true,minWidth: 100, cellStyle:{'font-size': '14px'  }},
    { headerName: 'Phone', field: 'phoneEmployee', filter: true ,editable: true,minWidth: 100, cellStyle:{'font-size': '14px'  }},
    { headerName: 'Email', field: 'emailEmployee', filter: true,editable: true,minWidth: 100, cellStyle:{'font-size': '14px'  }},
    { headerName: 'Name', field: 'nameEmployee', filter: true,editable: true, minWidth: 100, cellStyle:{'font-size': '14px' }},
    { headerName: 'HiringDate', field: 'dateString', filter: true,editable: true,minWidth: 100, cellStyle:{'font-size': '14px'  }},
    { headerName: 'Active', field: 'activeEmployee', filter: true, editable: true,minWidth: 100, cellStyle:{'font-size': '14px'  }},
   
    
  ];

  
  
  rowData:any;

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    private contactsService:ContactsService) {
    
  
    this.contactsService.getEmployees().subscribe( (data:any)=> {
     
      data.map((item:any)=>{
      item.dateString=new Date(item.date_embaucheEmployee).toDateString();


        return item;
      })
     
      this.rowData=data;
     this.singleton.listContacts=data;
     
     });
       

     this.contactsService.getProfiles().subscribe((data: any) => {
      data = data.sort((a: any,b: any) => a.nameProfile.localeCompare(b.nameProfile));
      /*
      data.map((a: any) => {
        a.checked = false;
        return a;
      })
      */
      this.singleton.listProfiles = data;

      
      
   
    });

    this.contactsService.getJobTitles().subscribe((data: any) => {
      
      this.singleton.listJobTitles = data;
     
    });
  }

  ngOnInit(): void {
  }

}
