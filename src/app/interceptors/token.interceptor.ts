import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (localStorage.getItem('user')) {
      const { token } = JSON.parse(localStorage.getItem('user')!);
console.log(token)
      if (token) {
        request = request.clone(
          { headers: request.headers.set('x-auth-token', token)
        });
      }
    }
    return next.handle(request);
  }
}
