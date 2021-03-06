import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(request)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          // Operation failed; error is an HttpErrorResponse
          error: (error) => (ok = 'failed')
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms.`;
          // this.messenger.add(msg);
          console.info(msg);
        })
      );
  }
}
