import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,
    private singleton:SingletonService,
    

  ) { }

  

  getProfiles(): Observable<any>{

    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +   this.singleton.token);
    return this.http.get<any>(environment.contextPath +'profiles', { 'headers': headers } );
  }

  getRoles():Observable<any>{

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' +  this.singleton.token);

    return this.http.get<any>(environment.contextPath +'roles', { 'headers': headers } );
   }
  

  saveProfile(item:any):Observable<any>{
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.post<any>(environment.contextPath +'profiles', item,{ 'headers': headers } );
    }


  

    updateProfile(item:any):Observable<any>{
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' +  this.singleton.token);
  
      return this.http.put<any>(environment.contextPath +'profiles', item,{ 'headers': headers } );
    }










}
