import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private singleton:SingletonService) { }

  loginUser(emailinput:string , passwordinput: string): void{
   
    const header: any={
      accept:'*/*',
      ContentType:'application/json'
    }
    const obj:any={
      email: emailinput,
      password: passwordinput
    };
    this.http.post<any>(environment.contextPath + 'api/auth/signin', obj, header).subscribe((data:any) => {

      
      this.singleton.token = data.accessToken;
      
      localStorage.setItem('accesToken', data.accessToken);
          
      
      this.toastr.success( 'Bienvenue sur LBtimesheet');
      this.router.navigate(['/home']);
    })
  }
}
