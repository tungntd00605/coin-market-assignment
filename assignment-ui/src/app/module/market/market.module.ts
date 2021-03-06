import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketFormComponent } from './market-form/market-form.component';
import {RouterModule} from '@angular/router';
import {ROUTER_GROUPS} from '../../my-route/my-route.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MarketListComponent, MarketFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([ROUTER_GROUPS.MARKET_MANAGER])
  ]
})
export class MarketModule { }
