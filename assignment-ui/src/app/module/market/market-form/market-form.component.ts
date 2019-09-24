import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Market} from '../../../entity/market';

@Component({
  selector: 'app-market-form',
  templateUrl: './market-form.component.html',
  styleUrls: ['./market-form.component.css']
})
export class MarketFormComponent implements OnInit {
  market: Market = new Market();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  saveMarket() {
    this.http.post<Market>('http://localhost:8080/api/v1/markets', this.market)
      .subscribe((resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        });
  }
}
