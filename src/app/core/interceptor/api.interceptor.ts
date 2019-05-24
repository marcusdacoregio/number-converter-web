import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable , throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url.toLowerCase();
    if (url.startsWith('/') && !url.startsWith('/assets')) {
      request = request.clone({
        url: environment.apiUrl + request.url,
      });
    }

    return next.handle(request).pipe(
      catchError(x => this.handleError(x))
    );
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.status === 403 || httpError.status === 500 || httpError.status <= 0) {
      return throwError('There was a unexpected error, try again later');
    }

    let message: string;
    if (httpError.error.errors) {
      message = httpError.error.errors
          .map(error => error.defaultMessage)
          .join('\n');
    } else {
      message = httpError.error.message;
    }

    return throwError(message);
  }
}
