import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { ProjectService } from '../project.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {

  
  dropdownTeamLeadSettings:any;

  
  ProjectTeamLead_SelectedName='';
  ProjectTeamLead_Selected:number=0;
  nameProject='';
  startDateProject='';
  itemProject:any;
  ProjectTeamLead_Selected2:any[]=[];
  fromDialog!: string;



  constructor(public dialogRef: MatDialogRef<ItemProjectComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    public singleton:SingletonService,
    private projectService:ProjectService,
    private router:Router,
    private toastr:ToastrService
    ) { 
      this.singleton.listProjects.forEach((item:any)=>{
        if(data.projectid === item.idProject){
          
          this.itemProject=item;
          this.nameProject=item.nameProject;
          const dateValue=new Date(item.startDateProject);
          this.startDateProject=''+dateValue.getFullYear()+'-'+('0'+(dateValue.getMonth()+1)).slice(-2)+'-'+('0'+dateValue.getDate()).slice(-2);
          
          this.ProjectTeamLead_Selected2=[item.nameTeamLead];
          
          
        }
      })
    }






    CancelDialog() { this.dialogRef.close({ event: 'cancel', data: this.fromDialog }); }
    
    saveProject():void{


      const item:any={};
      const item2:any={};


      if(this.data.projectid===-1){
      item.nameProject=this.nameProject;
      item.startDateProject=this.startDateProject;
    item.idTeamLead=this.ProjectTeamLead_Selected;
    item.nameTeamLead=this.ProjectTeamLead_SelectedName;



    this.projectService.saveProject(item).subscribe((data:any)=>{
    
      console.log(data);

      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès'); 
      
    })



      }

      else{

        item2.idProject=this.data.projectid;

        item2.nameProject=this.nameProject;
        item2.startDateProject=this.startDateProject;
      item2.idTeamLead=this.ProjectTeamLead_Selected;
      item2.nameTeamLead=this.ProjectTeamLead_SelectedName;
  
  
  
      this.projectService.updateProject(item2).subscribe((data:any)=>{
      
        console.log(data);
  
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        this.toastr.success( 'Enregistré avec succès'); 
        
      })

      }
     
/*
      let TeamsSelected:any[]=[];
      console.log(this.singleton.listTeams)
    this.singleton.listTeams.forEach((item:any)=>{
      if(item.idTeam===this.listTeams_Selected.idTeam){
        TeamsSelected.push(item);
        
      }
    })
    item.teams=TeamsSelected;
    console.log(item)
*/

      
      
      
    }

    


  ngOnInit(): void {

    
    this.dropdownTeamLeadSettings = {
      singleSelection: true,
      idField: 'idEmployee',
      textField: 'nameEmployee',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection:true,
    };
  }

  /*
  onItemSelectTeams(item:any){

    this.listTeams_Selected=item;
  }
  */
  onItemSelectProjectTeamLead(item:any){
    
    this.ProjectTeamLead_Selected=item.idEmployee;
    this.ProjectTeamLead_SelectedName=item.nameEmployee;
   

  }


  onSelectAll(items: any) {
    console.log(items);
  }

}
