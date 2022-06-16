import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SingletonService } from 'src/app/singleton.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

 
  constructor(private http: HttpClient,
    private singleton:SingletonService)
     {}


     getEmployees(): Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +   this.singleton.token);
      return this.http.get<any>(environment.contextPath +'employees', { 'headers': headers } );
    }

    getProfiles(): Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +   this.singleton.token);
      return this.http.get<any>(environment.contextPath +'profiles', { 'headers': headers } );
    }

    getJobTitles(): Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +   this.singleton.token);
      return this.http.get<any>(environment.contextPath +'jobTitles', { 'headers': headers } );
    }

    saveEmployee(item:any):Observable<any>{
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.post<any>(environment.contextPath +'employees', item,{ 'headers': headers } );
    }


    updateEmployee(item:any):Observable<any>{
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.put<any>(environment.contextPath +'employees', item,{ 'headers': headers } );
    }
}
