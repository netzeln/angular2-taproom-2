import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-pint',
  inputs: ['keg'],
  outputs: [], // MUST MATCH W/ PUBLIC PROPERTY BELOW THAT INSTANTIATES THE EventEmitter
  template: `
  <button (click)="sellPint(keg)" class="btn btn-warning btn-xs">Sell a Pint</button>
  `
})

export class SellPintComponent {
  // public keg: Keg;
  // public onPintSold: EventEmitter<Keg>;
  // public remainingPints: number = this.keg.pintsLeft;
  // constructor(){
  //   this.onPintSold = new EventEmitter();
  // }
  // sellPint(keg){
  //   var pintsLeft = this.remainingPints - 1;
  //   this.onPintSold.emit(keg);
  // }
}
