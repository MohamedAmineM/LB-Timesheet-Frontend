import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor( private http: HttpClient,
    private singleton:SingletonService ) { }

    getProjects(): Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +   this.singleton.token);
      return this.http.get<any>(environment.contextPath +'projects', { 'headers': headers } );
    }

    getTeams():Observable<any>{
    
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.get<any>(environment.contextPath +'teams', { 'headers': headers } );
      }

      getEmployees():Observable<any>{
    
        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +  this.singleton.token);
    
        return this.http.get<any>(environment.contextPath +'employees', { 'headers': headers } );
        }
  
    

}
