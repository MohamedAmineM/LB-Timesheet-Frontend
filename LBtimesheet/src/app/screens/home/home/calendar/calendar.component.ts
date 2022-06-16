import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';
import { CalendarService } from './calendar.service';
import { RenderCalendarComponent } from './render-calendar/render-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  columnDefs: ColDef[]  = [
 
    {  field: 'idSpecWorkTime',headerComponent: RenderCalendarComponent, cellRenderer:RenderCalendarComponent , minWidth: 120, cellStyle:{'font-size': '10px' }},
    { headerName: 'nameEmployee', field: 'nameEmployee', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'name', field: 'nameSpecWorkTime', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'type', field: 'idType', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'firstWeekDay', field: 'firstWeekDay', filter: true ,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'secondWeekDay', field: 'secondWeekDay', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'thirdWeekDay', field: 'thirdWeekDay', filter: true,editable: true, minWidth: 120, cellStyle:{'font-size': '14px' }},
    { headerName: 'fourthWeekDay', field: 'fourthWeekDay', filter: true,editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
    { headerName: 'fifthWeekDay', field: 'fifthWeekDay', filter: true, editable: true,minWidth: 120, cellStyle:{'font-size': '14px'  }},
   
    
  ];

  
  
  rowData:any;

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    private calendarService:CalendarService) {

    
      this.calendarService.getSpecWorkTime().subscribe((data: any) => {
        this.rowData = data;
      });

    
  
    
       
  }

  ngOnInit(): void {
  }

}
