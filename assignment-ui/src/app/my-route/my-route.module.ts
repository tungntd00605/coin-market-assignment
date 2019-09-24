import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from '../module/hero/hero-list/hero-list.component';
import {HeroFormComponent} from '../module/hero/hero-form/hero-form.component';
import {ProductListComponent} from '../module/product/product-list/product-list.component';
import {ProductFormComponent} from '../module/product/product-form/product-form.component';
import {CoinListComponent} from '../module/coin/coin-list/coin-list.component';
import {CoinFormComponent} from '../module/coin/coin-form/coin-form.component';
import {MarketListComponent} from '../module/market/market-list/market-list.component';
import {MarketFormComponent} from '../module/market/market-form/market-form.component';

export const ROUTER_GROUPS = {
  COIN_MANAGER: {
    path: 'coins',
    name: 'Coin Management',
    display: true,
    children: [
      {
        path: 'list',
        component: CoinListComponent,
        data: {
          name: 'List Coin',
          display: true
        }
      },
      {
        path: 'create',
        component: CoinFormComponent,
        data: {
          name: 'Create Coin',
          display: true
        }
      }
    ] as Routes
  } as Route,
  MARKET_MANAGER: {
    path: 'markets',
    name: 'Market Management',
    display: true,
    children: [
      {
        path: 'list',
        component: MarketListComponent,
        data: {
          name: 'List Market',
          display: true
        }
      },
      {
        path: 'create',
        component: MarketFormComponent,
        data: {
          name: 'Create Market',
          display: true
        }
      }
    ] as Routes
  } as Route
};

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'coins/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class MyRouteModule {
}
