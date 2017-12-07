import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { SITES } from './sites';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  siteID: number;
  sites: Array<any> = SITES;
  currentSite: any = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach( param =>{
      this.currentSite = SITES.find( site => {
          return site.id === parseInt(param.id)
      }
}
