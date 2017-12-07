import { Component, OnInit } from '@angular/core';
import { SITES } from '../site/sites';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  sites= SITES;
  constructor() { }


  ngOnInit() {
    console.log('sites- gallery is ', this.sites)
  }
}
