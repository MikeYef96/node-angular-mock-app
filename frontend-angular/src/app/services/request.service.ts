import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl: string = 'http://localhost:3000';
  options = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
    }
  );

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + '/api/book/', { headers: this.options});
  }
}
