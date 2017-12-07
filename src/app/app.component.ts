import { Component } from '@angular/core';
import {SITES} from './site/sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  sites = SITES;
}
