import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ItemProjectComponent } from '../item-project/item-project.component';

@Component({
  selector: 'app-render-project',
  templateUrl: './render-project.component.html',
  styleUrls: ['./render-project.component.css']
})
export class RenderProjectComponent implements ICellRendererAngularComp {
  projectid = -1;
  params:any;
  
  constructor(public dialog: MatDialog) { }
  

  onCreate():void{
    const dialogRef  = this.dialog.open(ItemProjectComponent,{
      width:"35%",
      height:"65%",
      disableClose:false,
      autoFocus:true,
      
      data:{
        projectid:this.projectid
      }

    });
  }

  onEdit():void{
    const dialogRef  = this.dialog.open(ItemProjectComponent,{
      width:"35%",
      height:"65%",
      disableClose:false,
      autoFocus:true,
      
      data:{
        projectid:this.projectid
      }

    });
  }



  refresh(params: ICellRendererParams): boolean {
    return true ;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.projectid = this.params.value;
   console.log(this.projectid);
  }

  ngOnInit(): void {
  }

}
