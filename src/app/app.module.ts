import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SitesService } from './services/sites/sites.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CarouselComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
