import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image, ServerResponse } from '../Image';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string = 'http://localhost:5000/image'

  constructor(private httpClient: HttpClient) { }

  getSmall(): Observable<ServerResponse<Image>> {
    return this.httpClient.get<ServerResponse<Image>>(this.apiUrl + '/small')
  }

}
