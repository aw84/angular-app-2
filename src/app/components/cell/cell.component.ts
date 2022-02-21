import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/Image';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() name!: string;
  @Input() small!: string;
  image!: Image;
  constructor() {
    
  }

  ngOnInit(): void {
    this.image = { name: this.name, small: this.small }
  }

}
