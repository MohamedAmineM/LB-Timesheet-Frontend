import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ItemJobTitleComponent } from '../item-job-title/item-job-title.component';

@Component({
  selector: 'app-render-job-title',
  templateUrl: './render-job-title.component.html',
  styleUrls: ['./render-job-title.component.css']
})
export class RenderJobTitleComponent implements ICellRendererAngularComp {
  jobTitleid = -1;
  params:any;

  constructor(public dialog: MatDialog) {}
  

  openDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.height = "60%";
    dialogConfig.width = "50%";
    this.dialog.open(ItemJobTitleComponent,dialogConfig);


  }
    
  

  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.jobTitleid = this.params.value;
   console.log(this.jobTitleid);
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
 

  ngOnInit(): void {
  }

}
