import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ViewCarrosas',
  templateUrl: './ViewCarrosas.component.html',
  styleUrls: ['./ViewCarrosas.component.css']
})

export class ViewCarrosasComponent implements OnInit {
  
  @ViewChild('imgBig') big!: ElementRef;
  @ViewChild('asImg') image!: ElementRef;

  constructor(private render2: Renderer2) {}

  ngOnInit() {
  }

  change(): void {
    const asImg = this.image.nativeElement;
    this.render2.data;
  }
}