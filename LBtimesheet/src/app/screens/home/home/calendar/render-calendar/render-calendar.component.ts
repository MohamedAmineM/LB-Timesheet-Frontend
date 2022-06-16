import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ItemCalendarComponent } from '../item-calendar/item-calendar.component';

@Component({
  selector: 'app-render-calendar',
  templateUrl: './render-calendar.component.html',
  styleUrls: ['./render-calendar.component.css']
})
export class RenderCalendarComponent implements ICellRendererAngularComp {
  calendarid = -1;
  params:any;

  constructor(public dialog: MatDialog) {}
  openDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.height = "60%";
    dialogConfig.width = "50%";
    this.dialog.open(ItemCalendarComponent,dialogConfig);


  }
  






  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.calendarid = this.params.value;
   console.log(this.calendarid);
  }

  ngOnInit(): void {
  }

}
