import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductService } from './product.service';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { RouterModule, Routes } from '@angular/router';
import { RoductTracklistingComponent } from './roduct-tracklisting/roduct-tracklisting.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';



const appRoutes: Routes = [
   { path: 'products', component: ProductListComponent },
   { path: 'product/:id', component: ProductPageComponent },
   { path: '', pathMatch: 'full', redirectTo: 'products' },


]


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    RoductTracklistingComponent,
    ProductTracklistingComponent,
    ProductListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class NameModule { }