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
    this.http.get<Market>('http://localhost:8080/api/v1/markets')
      .subscribe((resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        });
  }

}
