import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
// import { SitesService } from './services/sites/sites.service';
import { AboutComponent } from './about/about.component';
import { SiteComponent } from './site/site.component';
import { GalleryRoutingModule} from './gallery/gallery-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CarouselComponent,
    GalleryComponent,
    AboutComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    GalleryRoutingModule,
    RouterModule.forRoot([
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: '',
            component: WelcomeComponent
        }
    ])
  ],
  // providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
