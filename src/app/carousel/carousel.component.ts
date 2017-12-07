import { Component, OnInit } from '@angular/core';
import { SITES } from '../site/sites';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items= SITES;

  constructor() { }


  ngOnInit() {
    console.log('items - carousel is', this.items)
  }

}
