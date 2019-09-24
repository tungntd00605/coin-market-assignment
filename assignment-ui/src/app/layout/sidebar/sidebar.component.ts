import {Component, OnInit} from '@angular/core';
import {ROUTER_GROUPS} from '../../my-route/my-route.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routeGroups = [];

  constructor() {
  }

  ngOnInit() {
    this.routeGroups = Object.values(ROUTER_GROUPS);
  }

}
