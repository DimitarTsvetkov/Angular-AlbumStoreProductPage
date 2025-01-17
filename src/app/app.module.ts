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







// import { ProductService } from '../product.service';
// import { Component, OnInit } from '@angular/core';
// import { Product } from '../product'


// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {

//   products: Product[];

//   constructor( private _productService: ProductService) { }

//   ngOnInit() {
//     this._productService.getProducts().subscribe(response => this.products = response )


//   }

// }




// <ul>
//   <li *ngFor="let product of products"><a routerLink='/product/{{product.id}}' routerLinkActive="active" >{{product.albumName}}</a></li>
// </ul>
