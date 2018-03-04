import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
// import new component
import { ProductListComponent } from './product-list/product-list.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'events',  component: EventListComponent },
];

@NgModule({
  declarations: [
    // add product component
    ProductListComponent,
    AppComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
