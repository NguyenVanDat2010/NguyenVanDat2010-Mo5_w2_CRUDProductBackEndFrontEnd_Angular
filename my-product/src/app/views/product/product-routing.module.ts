import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductComponent } from './list-product/product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'detail',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
