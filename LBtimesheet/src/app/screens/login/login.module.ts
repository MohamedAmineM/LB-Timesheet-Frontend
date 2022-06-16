import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
        {
          path: '', component: LoginComponent
        }
      ]
    ),
   

  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }