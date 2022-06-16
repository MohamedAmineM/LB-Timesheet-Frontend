import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private singleton:SingletonService,
    private http:HttpClient) { }

    getTeams():Observable <any>{
      
      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +  this.singleton.token);

        return this.http.get<any>(environment.contextPath +'teams', { 'headers': headers } );


    }
    getProjects():Observable<any>{

      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('accept', '*/*')
        .set('Authorization', 'Bearer ' +  this.singleton.token);

        return this.http.get<any>(environment.contextPath +'prjects',{'headers':headers});

    }

}
