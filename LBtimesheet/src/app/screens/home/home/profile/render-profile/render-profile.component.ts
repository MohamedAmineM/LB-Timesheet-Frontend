import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ItemProfileComponent } from '../item-profile/item-profile.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { SingletonService } from 'src/app/singleton.service';


@Component({
  selector: 'app-render-profile',
  templateUrl: './render-profile.component.html',
  styleUrls: ['./render-profile.component.css']
})
export class RenderProfileComponent implements ICellRendererAngularComp  {
  item:any;
  profileid = -1;
  params:any;




  constructor(public dialog: MatDialog,
    public singleton:SingletonService,) {}
  
  onCreate():void{
    this.singleton.listRoles.map((itemRole1: any) => {
      itemRole1.checked = false;     
});
    const dialogRef  = this.dialog.open(ItemProfileComponent,{
      width:"25%",
      height:"60%",
      disableClose:false,
      autoFocus:true,
      
      data:{
        profileid:this.profileid
      }

    });
  }


  onEdit():void{
    this.singleton.listRoles.map((itemRole1: any) => {
            itemRole1.checked = false;     
    });
    const dialogRef  = this.dialog.open(ItemProfileComponent,{
      width:"25%",
      height:"60%",
      disableClose:false,
      autoFocus:true,
      
      data:{
        profileid:this.profileid
      }

    });
    
    
    
  }









  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    if(this.params.value)
   this.profileid = this.params.value;
   console.log(this.profileid);
  }

  ngOnInit(): void {
  }

}
