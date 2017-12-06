import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Array<any> = []
  constructor() {
    this.items = [
        { screenshot: 'assets/images/ScreenShot-flights.png' },
        { screenshot: 'assets/images/ScreenShot-Map.png' },
      ] }

  ngOnInit() {

  }

}
