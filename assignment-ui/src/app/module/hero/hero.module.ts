import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {RouterModule} from '@angular/router';
import {ROUTER_GROUPS} from '../../my-route/my-route.module';

@NgModule({
  declarations: [HeroListComponent, HeroFormComponent],
  imports: [
    CommonModule,
    // RouterModule.forRoot([ROUTER_GROUPS.HERO_MANAGER])
  ]
})
export class HeroModule {
}
