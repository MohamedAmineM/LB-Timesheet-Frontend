import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { ContactsService } from '../contacts.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.css']
})
export class ItemContactComponent implements OnInit {
  


  
  dropdownProfilesSettings:any  ;
  dropdownJobTitlesSettings:any;


  nameEmployee='';
  emailEmployee='';
  phoneEmployee='';
  activeEmployee=false;
  cinEmployee='';
  date_embaucheEmployee='';
  nameProfile='';
  profileSelected:any[]=[];
  jobTitleSelected:any[]=[];
  
  jobTitle_OnSelect={};
  profile_OnSelect={};

  fromDialog!: string;

  itemContacts: any;



  constructor(public dialogRef: MatDialogRef<ItemContactComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    
    private http: HttpClient,
    public singleton:SingletonService,
    private toastr: ToastrService,
    private router:Router,
    private contactsService:ContactsService
    
  ) {

    this.singleton.listContacts.forEach((item:any) => {
      if(data.userid === item.idEmployee){
        
        this.itemContacts = item;
        this.nameEmployee = item.nameEmployee;
        this.emailEmployee = item.emailEmployee;
        this.phoneEmployee = item.phoneEmployee;
        this.activeEmployee = item.activeEmployee;
        this.cinEmployee = item.cinEmployee;
            const dateValue=new Date(item.date_embaucheEmployee)
            this.date_embaucheEmployee = ''+dateValue.getFullYear()+'-'+('0'+(dateValue.getMonth()+1)).slice(-2)+'-'+('0'+dateValue.getDate()).slice(-2);
        this.profileSelected.push(item.profile);
        this.jobTitleSelected.push(item.jobTitle);
            /*
            this.singleton.listProfiles.map((itemProfile1: any) => {
              item.profiles.forEach((itemProfile2: any) => {
                  if(itemProfile1.nameProfile === itemProfile2.nameProfile){
                    itemProfile1.nameProfile=this.listProfiles_Selected;
                  }
              })
            });
*/


      }
    })
    
    
  }


  ngOnInit(){
   
    this.dropdownProfilesSettings  = {
      singleSelection: true,
      idField: 'idProfile',
      textField: 'nameProfile',
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
      
      
    };
    this.dropdownJobTitlesSettings  = {
      singleSelection: true,
      idField: 'idJobTitle',
      textField: 'nameJobTitle',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
      
    };
  }
  

  CancelDialog() { this.dialogRef.close({ event: 'cancel', data: this.fromDialog }); }


  saveEmployee():void{
  
    const item :any={};
    const item2 :any={};

    console.log(this.data);
    if(this.data.userid===-1){

    console.log(this.data.userid);
    item.nameEmployee=this.nameEmployee;
    item.emailEmployee=this.emailEmployee;
    item.phoneEmployee=this.phoneEmployee;
    item.activeEmployee=this.activeEmployee;
    item.cinEmployee=this.cinEmployee;
    item.date_embaucheEmployee=this.date_embaucheEmployee;

    var Job={};
     this.jobTitleSelected.map((element)=>{
      Job=element;
     });

     var Pro={};
     this.profileSelected.map((element)=>{
      Pro=element;
     });
 
    

    item.jobTitle=Job;
    item.profile=Pro;
    
    
console.log(item);
    /*this.singleton.listJobTitles.forEach((item:any)=>{
      if(item.idJobTitle===this.listJobTitles_Selected.idJobTitle){
        jobTitleSelected.push(item); 
        alert(jobTitleSelected.toString());
      }
    })
    item.jobTitles=jobTitleSelected;
    */

    this.contactsService.saveEmployee(item).subscribe((data:any)=>{
    
      console.log(data);

      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
    })
  }

    else{

    item2.idEmployee=this.data.userid;
    item2.nameEmployee=this.nameEmployee;
    item2.emailEmployee=this.emailEmployee;
    item2.phoneEmployee=this.phoneEmployee;
    item2.activeEmployee=this.activeEmployee;
    item2.cinEmployee=this.cinEmployee;
    item2.date_embaucheEmployee=this.date_embaucheEmployee;

    

    var Job={};
     this.jobTitleSelected.map((element)=>{
      Job=element;
     });

     var Pro={};
     this.profileSelected.map((element)=>{
      Pro=element;
     });
 
    

    item2.jobTitle=Job;
    item2.profile=Pro;
    
    console.log(item2.profile)
    
    
console.log(item2)
    /*this.singleton.listJobTitles.forEach((item:any)=>{
      if(item.idJobTitle===this.listJobTitles_Selected.idJobTitle){
        jobTitleSelected.push(item); 
        alert(jobTitleSelected.toString());
      }
    })
    item.jobTitles=jobTitleSelected;
    */

    this.contactsService.updateEmployee(item2).subscribe((data:any)=>{
    
      console.log(data);

      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.toastr.success( 'Enregistré avec succès');
    })
    }
  
    
   


      
  }

  


    onItemProfileSelect(item: any) {
      this.profile_OnSelect=item;
      this.profileSelected=[item];
console.log( this.profileSelected)
      
      
      console.log(this.profile_OnSelect)
      
      
     
    }

    onItemJobTitlesSelect(item:any){
      this.jobTitle_OnSelect=item;
      this.jobTitleSelected.push(item);
      this.jobTitleSelected.splice(this.jobTitleSelected.length-1, 1);
      console.log(this.jobTitleSelected)


     var object={};
     this.jobTitleSelected.map((element)=>{
       object=element;
     })
     console.log(object)
        
    }

  
  
}
