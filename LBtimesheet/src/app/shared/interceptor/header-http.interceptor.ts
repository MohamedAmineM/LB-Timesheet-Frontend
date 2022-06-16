
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment';
import {Observable, pipe, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { SingletonService } from 'src/app/singleton.service';
import { Token } from '@angular/compiler';



@Injectable()
export class HeaderHttpInterceptor implements HttpInterceptor {
  

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               public singleton: SingletonService) {
  }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {


    const URL_PATH = environment.contextPath;
    let url;
    /*     if ( request.url.includes( 'file' )){
           url = URL_PATH + request.url;
         }
          if ( request.url.includes( 'http' ) || request.url.includes( './assets' ) ) {
              url = request.url;
          } else {
              url = URL_PATH + request.url;
          }*/
    const interceptedUrl = this.getIntercepted(request.url);
    switch (interceptedUrl) {
      case 'http':
        url = request.url; break;
      case 'i18':
        url = request.url; break;
      case './assets':
        url = request.url;
        break;
      default:
        url = URL_PATH + request.url ;
    }

    const customRequest = request.clone( {
      headers: request.headers,
      reportProgress: request.reportProgress,
      params: request.params,
      responseType: request.responseType,
      withCredentials: false,
      body: request.body,
      method: request.method,
      url
    } );
    //this.singleton.displayLoader = true;
    return  next.handle( customRequest ).pipe(
      map((event: HttpEvent<any>) => {
     //  this.singleton.displayLoader = false;
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
       // this.singleton.displayLoader = false;
       // this.singleton.loader = false;
       if ( (error.url == null || error.url.includes( '/login' ))  ) {
          localStorage.removeItem( 'IsLoggedIn' );
          // not logged in so redirect to login page with the return url and return false
          this.router.navigate(['login']);
        }
       return throwError(error);
      }));
  }

  getIntercepted(url: string): string {
    if ( url.startsWith( 'http' ) ) {
      return 'http';
    }
    if ( url.startsWith( './assets' ) ) {
      return './assets';
    }
    if ( url.includes( 'i18' ) ) {
      return 'i18';
    }
    return 'default';
  }


}