import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient,
    private singleton:SingletonService 
  ) { }   


      getProjects(): Observable<any>{

        const headers= new HttpHeaders()
          .set('content-type', 'application/json')
          .set('accept', '*/*')
          .set('Authorization', 'Bearer ' +   this.singleton.token);
        return this.http.get<any>(environment.contextPath +'projects', { 'headers': headers } );
      }


      saveProject(item:any):Observable<any>{
    
        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +  this.singleton.token);
    
        return this.http.post<any>(environment.contextPath +'projects',item, { 'headers': headers } );
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

        
        saveTeam(item:any):Observable<any>{
    
          const headers= new HttpHeaders()
          .set('content-type', 'application/json')
          .set('accept', '*/*')
          .set('Authorization', 'Bearer ' +  this.singleton.token);
      
          return this.http.post<any>(environment.contextPath +'teams',item, { 'headers': headers } );
          } 

          updateTeam(item:any):Observable<any>{
    
            const headers= new HttpHeaders()
            .set('content-type', 'application/json')
            .set('accept', '*/*')
            .set('Authorization', 'Bearer ' +  this.singleton.token);
        
            return this.http.put<any>(environment.contextPath +'teams',item, { 'headers': headers } );
            } 


            updateProject(item:any):Observable<any>{
    
              const headers= new HttpHeaders()
              .set('content-type', 'application/json')
              .set('accept', '*/*')
              .set('Authorization', 'Bearer ' +  this.singleton.token);
          
              return this.http.put<any>(environment.contextPath +'projects',item, { 'headers': headers } );
              } 
            
  
}

