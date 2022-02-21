import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:5000/user_namespace/test'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getRoot(): Observable<String> {
    console.log("ApiService: getRoot");
    return this.httpClient.get<String>(this.url)
      // .pipe(
      //   tap(_ => console.warn),
      //   catchError(this.handleError<String>('getRoot', "<empty>"))
      // );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
