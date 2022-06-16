import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SingletonService } from 'src/app/singleton.service';
import { DashboardService } from './dashboard.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 

})
 

export class DashboardComponent implements OnInit {
  fontStyleControl = new FormControl();
  fontStyle?: any;

  arr:any[]=[];
  
  options1: any;
  options2:any;
  value:any;
  AverageWorkingHours:any;
  AverageBreakTime:any;
   totalTime:any;
   outTime:any;
   numberAbsencesDays:any;
   numberLeaveDays:any;
  constructor( private http: HttpClient,
    public router: Router,
    private dashboardService:DashboardService,
    public singleton:SingletonService,
    ) {
      

      function convertMsToHourAndMinutes(milliseconds : number) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        
        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
        
        let minutesToHrs = (minutes % 60)/60;
        
        minutesToHrs = + minutesToHrs.toString().padStart(2, '0');
        hours = +hours.toString().padStart(2, '0');
        
        return `${hours+minutesToHrs}`;
        }

 //**************Congés*************/

this.dashboardService.getLeaves().subscribe((data:any)=>{
  data.forEach((element:any) => {
    this.singleton.listLeaveEmployee.push(element.leaveNbrHours);
  });

          let numberDays=0;
          data.map((item:any)=>{
            
            if(item.leaveNbrHours==8){
              numberDays+=1;
            }
            return numberDays;
          })
          this.numberLeaveDays=numberDays;
})


















        //**************absences*************/

        this.dashboardService.getAbsences().subscribe((data:any)=>{

          data.forEach((element:any) => {
            this.singleton.listAbsenceEmployee.push(element.nbrHoursAbsence);
          });

          let numberDays=0;
          data.map((item:any)=>{
            console.log(data)
            if(item.nbrHoursAbsence==8){
              numberDays+=1;
            }
            return numberDays;
          })
          this.numberAbsencesDays=numberDays;
          
        });











//**************Pointages(INTime+OUtTime)*************/


      this.dashboardService.getPointages().subscribe((data:any)=>{

        
        let workingTimeResult:any=0;
        let outTimeResult:any=0;
        let numberDays:any=0;
      
   data.map((element:any)=>{
     if(element.totalTimePointage!=0){
      workingTimeResult+=element.totalTimePointage;
      outTimeResult+=element.outTimePointage;
      numberDays++;
     }
          
          
   })
   
   workingTimeResult/=numberDays;
   
         
         this.AverageWorkingHours=convertMsToHourAndMinutes(workingTimeResult);
       this.AverageWorkingHours= (Math.round(this.AverageWorkingHours * 100)/100).toFixed(2);


       outTimeResult/=numberDays;

       this.AverageBreakTime=convertMsToHourAndMinutes(outTimeResult);
       this.AverageBreakTime= (Math.round(this.AverageBreakTime * 100)/100).toFixed(2);
       
       


        data.map((item:any)=>{

          item.dateString=new Date(item.pointageDate).toDateString();

            
          this.singleton.listDatePointage.push(item.dateString);
          
          this.totalTime=convertMsToHourAndMinutes(item.totalTimePointage);
          this.singleton.listTotalTimePointage.push((Math.round(this.totalTime * 100)/100).toFixed(2));
          this.outTime=convertMsToHourAndMinutes(item.outTimePointage);
          this.singleton.listOutTimePointage.push((Math.round(this.outTime * 100)/100).toFixed(2));


            return item;
            
          })

  
        
      })
   
     



      

      
      
      













   }
   
  
  ngOnInit(): void {

    this.options2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value:6.52*60, name: 'Travail' },
            { value: 2.12*60, name: 'Pause' },
            { value: 16*60, name: 'Leave' },
            { value: 24*60, name: 'Absence' },
            
          ]
        }
      ]
    };


    


    
    
    this.options1 = {
     
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.singleton.listDatePointage
        }
      ],
      yAxis: [
        {
          type: 'value'

        }
      ],
      series: [
        {
          name: 'Travail',
          type: 'bar',
           stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: this.singleton.listTotalTimePointage
        },
        {
          name: 'Pause',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data:this.singleton.listOutTimePointage
        },
        {
          name: 'Leave',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: this.singleton.listLeaveEmployee
        },
        
        {
          name: 'Absence',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data:  this.singleton.listAbsenceEmployee
        },
        
      ]
    };
  }

  


 
  
}




