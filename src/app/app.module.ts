import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
// import new component
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products',  component: ProductListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    // add product component
    ProductListComponent
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
