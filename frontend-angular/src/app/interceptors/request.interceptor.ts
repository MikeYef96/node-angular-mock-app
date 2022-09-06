import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.backend;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.modifyRequest(request));
  }

  private modifyRequest(req: HttpRequest<any>): HttpRequest<any> {

    if (req.url.startsWith('api/')) {
      const url = this.baseUrl;
      req = req.clone({
        url: url + req.url
      });
    }

    return req;
  }
}
