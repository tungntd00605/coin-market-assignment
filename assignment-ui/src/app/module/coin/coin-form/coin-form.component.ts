import { Component, OnInit } from '@angular/core';
import {Coin} from '../../../entity/coin';
import {HttpClient} from '@angular/common/http';
import {Market} from '../../../entity/market';

@Component({
  selector: 'app-coin-form',
  templateUrl: './coin-form.component.html',
  styleUrls: ['./coin-form.component.css']
})
export class CoinFormComponent implements OnInit {
  coin: Coin = new Coin();
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

  saveCoin() {
    this.http.post<Coin>('http://localhost:8080/api/v1/coins', this.coin)
      .subscribe((resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        });
  }
}
