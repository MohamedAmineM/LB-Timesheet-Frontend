import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItemContactComponent } from '../item-contact/item-contact.component';

@Component({
  selector: 'app-render-contact',
  templateUrl: './render-contact.component.html',
  styleUrls: ['./render-contact.component.css']
})
export class RenderContactComponent implements ICellRendererAngularComp  {
userid = -1;
params:any;

constructor(public dialog: MatDialog) {}



onCreate():void{

  const dialogRef  = this.dialog.open(ItemContactComponent,{
    width:"40%",
    height:"75%",
    disableClose:false,
    autoFocus:true,
    
   
      
   
    data:{
      userid:this.userid
    }

  });
}


onEdit():void{
  
  const dialogRef  = this.dialog.open(ItemContactComponent,{
    width:"40%",
    height:"75%",
    disableClose:false,
    autoFocus:true,
    
    data:{
      userid:this.userid
    }

  });
  
  
  
}



  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.userid = this.params.value;
   
  }


}
