import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinFormComponent } from './coin-form/coin-form.component';
import {RouterModule} from '@angular/router';
import {ROUTER_GROUPS} from '../../my-route/my-route.module';



@NgModule({
  declarations: [CoinListComponent, CoinFormComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([ROUTER_GROUPS.COIN_MANAGER])
  ]
})
export class CoinModule { }
