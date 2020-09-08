import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  api_url: string;
  headers = new HttpHeaders();
  headersLD = new HttpHeaders();
  constructor(private http: HttpClient,
    private router: Router,) { 
      this.api_url = environment.BASE_URL;
      this.headers = this.headers.set(
        'Content-Type',
        'application/json; charset=utf-8'
      );
      this.headers = this.headers.append(
        'Accept',
        'application/json; charset=utr-8'
      );
      this.headersLD = this.headers.set(
        'Content-Type',
        'application/ld+json; charset=utf-8'
      );
      this.headersLD = this.headersLD.append(
        'Accept',
        'application/ld+json; charset=utr-8'
      );
    }

    get_api_headers(route){
      return new Promise((resolve , reject)=>{
        this.http.get(this.api_url + route , { headers: this.headers }).subscribe(
          (data:any) => {
            resolve(data);
          },
          (err) => {
            console.log(err)
          reject(err);
          }
        )
      })
    }
    get_api_headersLD(route){
      return new Promise((resolve , reject)=>{
        this.http.get(this.api_url + route , { headers: this.headersLD }).subscribe(
          (data:any) => {
            resolve(data);
          },
          (err) => {
            console.log(err)
          reject(err);
          }
        )
      })
    }
}
