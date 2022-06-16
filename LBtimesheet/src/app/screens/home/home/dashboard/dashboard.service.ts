import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SingletonService } from 'src/app/singleton.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,
    private singleton:SingletonService,) { }


    getPointages(): Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +   this.singleton.token);
      return this.http.get<any>(environment.contextPath +'pointages', { 'headers': headers } );
    }


    getEmployees():Observable<any>{
    
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.get<any>(environment.contextPath +'employees', { 'headers': headers } );
      }


      getAbsences(): Observable<any>{

        const headers= new HttpHeaders()
          .set('content-type', 'application/json')
          .set('accept', '*/*')
          .set('Authorization', 'Bearer ' +   this.singleton.token);
        return this.http.get<any>(environment.contextPath +'absences', { 'headers': headers } );
      }

      getLeaves(): Observable<any>{

        const headers= new HttpHeaders()
          .set('content-type', 'application/json')
          .set('accept', '*/*')
          .set('Authorization', 'Bearer ' +   this.singleton.token);
        return this.http.get<any>(environment.contextPath +'leave', { 'headers': headers } );
      }

  }
