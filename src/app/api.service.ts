import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApiService{
  url:string;
  constructor(private http:HttpClient) {
   //this.url='/assets/pets.json';
   this.url='https://myprojectcms.tk/pets/show';
  }
/*  get<T>(url:string=this.url, params: HttpParams, token?: string): Observable<T> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    // @ts-ignore
    headers.append('x-auth-token', token);

    return this.http.get<T>(url, {
      params: params,
      headers: headers,
    });
  }*/
  getPets(params: { id: any }){
    return this.http.get<unknown>(this.url,{
      params:params
    })
  }
}


