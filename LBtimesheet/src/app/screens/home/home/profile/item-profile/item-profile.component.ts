import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-item-profile',
  templateUrl: './item-profile.component.html',
  styleUrls: ['./item-profile.component.css']
})
export class ItemProfileComponent {
itemProfile: any;

  nameProfile='';
  descriptionProfile='';
  activeProfile=false;

  fromDialog!: string;
  

  
  constructor(public dialogRef: MatDialogRef<ItemProfileComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    public singleton:SingletonService,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private router:Router

  ) {
  
    this.singleton.listProfiles.forEach((item:any) => {
      if(data.profileid === item.idProfile){
        this.itemProfile = item;
        this.activeProfile = item.activeProfile;
        this.descriptionProfile = item.descriptionProfile;
        this.nameProfile = item.nameProfile;
        this.singleton.listRoles.map((itemRole1: any) => {
          item.roles.forEach((itemRole2: any) => {
              if(itemRole1.nameRole === itemRole2.nameRole){
                itemRole1.checked = true;
              }
          })
        });
        
       


      }
    })
    
  }


  ngOnInit(): void {

  }

  

  CancelDialog() { this.dialogRef.close({ event: 'cancel', data: this.fromDialog }); }
  
  saveProfile( ): void{
    const listRoles:any[]=[];
    this.singleton.listRoles.forEach((item:any)=>{
      if (item.checked){
        listRoles.push(item);
      }
    })
    const item:any={}
    
    if(this.data.profileid===-1){

      
      item.activeProfile=this.activeProfile;
      item.descriptionProfile=this.descriptionProfile;
      item.nameProfile=this.nameProfile;
       item.roles=listRoles;
  
      this.profileService.saveProfile(item).subscribe((data:any)=>{
      
        console.log(data);
  
        
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
      })
    
    }
    
    else{

      const item:any={}

      item.idProfile=this.data.profileid;
      item.activeProfile=this.activeProfile;
      item.descriptionProfile=this.descriptionProfile;
      item.nameProfile=this.nameProfile;
       item.roles=listRoles;
  
      this.profileService.updateProfile(item).subscribe((data:any)=>{
      
        console.log(data);
  
        
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
      })
    

    }
    

  }



 


  CheckBox(role: any, event: any):void{
   
  this.singleton.listRoles.map((item: any) => {
    if(role.idRole=== item.idRole){
      item.checked =  event.checked;
    }
  return item;
  
  })

 
  }
  
  

  
}
     






