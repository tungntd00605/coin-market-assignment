import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coin} from '../../../entity/coin';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  coins: Coin[] = [];;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/v1/coins')
      .subscribe((resp: any) => {
          console.log(resp);
          resp.forEach( e => {this.coins.push(e); });
        },
        (error) => {
          console.log(error);
        });
  }

}
