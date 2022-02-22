import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getSmall(): Observable<Image[]> {
    const i = of([
      { name: 'abc', small: 'http://localhost:5000/img/small/1' },
      { name: 'def', small: 'http://localhost:5000/img/small/2' }
    ]);
    return i;
  }
}
