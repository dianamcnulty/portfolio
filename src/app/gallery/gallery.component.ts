import { Component, OnInit } from '@angular/core';
import { SitesService } from './../services/sites/sites.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  sites: Array<any> = []
  constructor(private sitesService: SitesService) { }


  ngOnInit() {
    this.sites = this.sitesService.getSites();
    console.log('sites is', this.sites)
  }
}
