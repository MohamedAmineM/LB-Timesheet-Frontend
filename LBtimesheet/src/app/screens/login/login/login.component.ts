import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SingletonService } from 'src/app/singleton.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  connect(emailinput:string , passwordinput: string): void{
   
    this.loginService.loginUser(emailinput, passwordinput);
  }
}