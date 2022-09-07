import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl: string = 'http://localhost:3000';
  headers = new HttpHeaders({
      'Content-Type':`application/json`,
      'Accept':`*/*`,
      'Access-Control-Allow-Origin': `*`
    }
  );

  constructor(private http: HttpClient) { }

  getRequest(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(
      this.baseUrl + '/api/book/',
      { headers: this.headers }
    );
  }
}
