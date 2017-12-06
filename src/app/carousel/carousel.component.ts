import { Component, OnInit } from '@angular/core';
import { SitesService } from './../services/sites/sites.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Array<any> = []
  constructor(private sitesService: SitesService) { }


  ngOnInit() {
    this.items = this.sitesService.getSites();
  }

}
