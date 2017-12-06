import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { SitesService } from './../services/sites/sites.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
siteIndex: number;
currentSite: Array<any> = []

  constructor(private route: ActivatedRoute, private sitesService: SitesService) { }

  ngOnInit() {
    this.route.params.forEach( param => this.siteIndex = param.id )
    sites = this.sitesService.getSites();
    // need to find current site object using the site id
    sites.forEach(site => {
      if (site.id === siteIndex) {
        this.currentSite = site
        return this.currentSite
      }
  })

  }

}
