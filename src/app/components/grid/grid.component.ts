import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Image';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  images: Image[] = [];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      { name: 'abc', small: 'http://localhost:5000/img/small/1' },
      { name: 'def', small: 'http://localhost:5000/img/small/2' }
    ]
  }

}
