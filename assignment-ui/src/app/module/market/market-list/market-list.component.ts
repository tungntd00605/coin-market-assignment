import { Component, OnInit } from '@angular/core';
import {Market} from '../../../entity/market';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {
  markets: Market[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/v1/markets')
      .subscribe((resp: any) => {
          console.log(resp);
          resp.forEach( e => {this.markets.push(e); });
        },
        (error) => {
          console.log(error);
        });
  }

}
