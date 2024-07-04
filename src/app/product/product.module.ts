import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
