import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { ProjectService } from '../project.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-item-team',
  templateUrl: './item-team.component.html',
  styleUrls: ['./item-team.component.css']
})
export class ItemTeamComponent implements OnInit {

  dropdownEmployeeSettings:any;
  dropdownTeamSettings:any;
  dropdownProjectSettings:any;
  dropdownProjectTeamLeadSettings:any;
  dropdownTeamTeamLeadSettings:any;
  dropdownTeamLeadSettings:any;

  listProjects_Selected:any[]=[];
  listEmployees_Selected:any[]=[];
  EmployeeTeamLead_Selected:number=0;
  EmployeeTeamLead_SelectedName='';

  
  name='';
  nameTeamLead='';
  description_Team='';
  active_Team=false;
  dropdownList:any;

  EmployeeTeamLead_Selected1:any[]=[];
  fromDialog!: string;

  itemTeam:any;
  idTeamLead:number =0;

  constructor(public dialogRef: MatDialogRef<ItemTeamComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    public singleton:SingletonService,
    private projectService:ProjectService,
    private router:Router,
    private toastr:ToastrService
    ) { 

console.log(data)
      this.singleton.listTeams.forEach((item:any)=>{
        if(data.teamid === item.idTeam){
          
          this.itemTeam=item;
          this.active_Team=item.active_Team;
          this.description_Team=item.description_Team;
          this.name=item.name;
          this.EmployeeTeamLead_Selected1=[item.nameTeamLead];
          this.listEmployees_Selected=item.employees; 
          this.listProjects_Selected=item.projects;
          // item.employees.forEach((item1:any)=>{
          //   this.listEmployees_Selected.push({idEmployee:item1.idEmployee,nameEmployee:item1.nameEmployee})
          // })

         

          /*
          this.singleton.listContacts.map((item1: any) => {
            item.employees.forEach((item2: any) => {
                if(item1.nameEmployee === item2.nameEmployee){
                  item1.selected = true;
                }
            })
          });
*/


          
      
    }
  })
}

  ngOnInit(): void {
    this.dropdownEmployeeSettings  = {
      singleSelection: false,
      idField: 'idEmployee',
      textField: 'nameEmployee',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    

    
    this.dropdownProjectSettings = {
      singleSelection: false,
      idField: 'idProject',
      textField: 'nameProject',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };


    this.dropdownTeamLeadSettings = {
      singleSelection: true,
      idField: 'idEmployee',
      textField: 'nameEmployee',
      allowSearchFilter: true,
      closeDropDownOnSelection:true,
      
    };



    

  }

   
  


  CancelDialog() { this.dialogRef.close({ event: 'cancel', data: this.fromDialog }); }
  
  saveTeam():void{
    const item :any={}
    const item2 :any={}




   if(this.data.idteam===-1){

      item.active_Team=this.active_Team;
      item.description_Team=this.description_Team;
      item.name=this.name;
      item.idTeamLead=this.EmployeeTeamLead_Selected;
      item.nameTeamLead=this.EmployeeTeamLead_SelectedName;
      item.employees=this.listEmployees_Selected;
      item.projects=this.listProjects_Selected;

      
  
    this.projectService.saveTeam(item).subscribe((data:any)=>{
    
      

      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
      
    })


/*
    let EmployeesSelected:any[]=[];
    this.singleton.listContacts.forEach((item:any)=>{
      if(item.idEmployee === this.listEmployees_Selected.idEmployee){
        EmployeesSelected.push(item);
        
      }
      console.log(this.listEmployees_Selected)

    this.singleton.listEmployees_Selected=this.listEmployees_Selected;
      
    })*/
    



 }
  
 else {

  
  

  item2.idTeam=this.data.teamid;
  item2.active_Team=this.active_Team;
  item2.description_Team=this.description_Team;
  item2.name=this.name;
  item2.idTeamLead=this.EmployeeTeamLead_Selected;
  item2.nameTeamLead=this.EmployeeTeamLead_SelectedName;
  item2.employees=this.listEmployees_Selected;
  item2.projects=this.listProjects_Selected;

  console.log(item2.employees)
  console.log(this.listEmployees_Selected)
  console.log(item2)

     

    
      
    

    this.projectService.updateTeam(item2).subscribe((data:any)=>{
    


      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
      
    })
 }
 
}
  
  

  onItemSelectProjects(item:any){

    this.listProjects_Selected.push(item);
    this.listProjects_Selected.splice(this.listProjects_Selected.length-1, 1);
    
  }

  onItemSelectEmployees(item:any){
    
    
    this.listEmployees_Selected.push(item);
    
    this.listEmployees_Selected.splice(this.listEmployees_Selected.length-1, 1);
    
  }

  onItemSelectEmployeeTeamLead(item:any){

    this.EmployeeTeamLead_Selected=item.idEmployee;
    this.EmployeeTeamLead_SelectedName=item.nameEmployee;

       
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
