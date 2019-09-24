import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {RouterModule} from '@angular/router';
import {ROUTER_GROUPS} from '../../my-route/my-route.module';

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    // RouterModule.forRoot([ROUTER_GROUPS.PRODUCT_MANAGER])
  ]
})
export class ProductModule {
}
