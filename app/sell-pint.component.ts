import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-pint',
  inputs: ['keg'],
  outputs: ['pintSold'], // MUST MATCH W/ PUBLIC PROPERTY BELOW THAT INSTANTIATES THE EventEmitter
  template: `
  <button (click)="sellPint(keg)" class="btn btn-warning btn-xs">Sell a Pint</button>
  `
})

export class SellPintComponent {
  public keg: Keg;
  public pintSold: EventEmitter<Keg>;
  constructor(){
    this.pintSold = new EventEmitter();
  }
  sellPint(keg){
    keg.pintsLeft = keg.pintsLeft - 1;
    this.pintSold.emit(keg);
  }
}
