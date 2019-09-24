import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-form',
  templateUrl: './market-form.component.html',
  styleUrls: ['./market-form.component.css']
})
export class MarketFormComponent implements OnInit {

  constructor() {
    // profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    // });
  }

  ngOnInit() {
  }

}
