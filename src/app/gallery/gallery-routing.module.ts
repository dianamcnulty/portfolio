import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from '../site/site.component';
import { GalleryComponent} from './gallery.component'

const galleryRoutes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: ':id',
                component: SiteComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(galleryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule { }
