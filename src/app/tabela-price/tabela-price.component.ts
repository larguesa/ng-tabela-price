import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-price',
  templateUrl: './tabela-price.component.html',
  styleUrls: ['./tabela-price.component.css'],
})
export class TabelaPriceComponent implements OnInit {
  c: number = 1000;
  i: number = 0.03;
  t: number = 4;

  constructor() {}

  ngOnInit() {}

  getSplit() {
    return (this.c * this.i) / (1 - 1 / Math.pow(1 + this.i, this.t));
  }

  getPeriods() {
    var periods = [];
    for (var i = 1; i <= this.t; i++) {
      periods.push(i);
    }
    return periods;
  }

  getInterest(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value * this.i;
  }

  getAmortization(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return this.getSplit() - value * this.i;
  }

  getBalance(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value;
  }
}
