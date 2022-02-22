import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Image';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getSmall().subscribe((i) => this.images = i);
  }

}
