import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  image = new Image ('', '', '', '', '');
  
  constructor() { }

  ngOnInit(): void {
  }

}
