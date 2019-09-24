import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './module/hero/hero-list/hero-list.component';
import {ProductListComponent} from './module/product/product-list/product-list.component';
import {HeroModule} from './module/hero/hero.module';
import {ProductModule} from './module/product/product.module';
import {MyRouteModule} from './my-route/my-route.module';
import {CoinModule} from './module/coin/coin.module';
import {MarketModule} from './module/market/market.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CoinModule,
    MarketModule,
    MyRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
