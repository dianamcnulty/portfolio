import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { SITES } from './sites';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
siteIndex: number;
sites: Array<any> = SITES;
currentSite: Array<any> = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach( param => this.siteIndex = param.id )
    // need to find current site object using the site id
    this.sites.forEach(site => {
      if (site.id === this.siteIndex) {
        this.currentSite = site
        return this.currentSite
      }
  })

  }

}
