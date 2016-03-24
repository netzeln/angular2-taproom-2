import {Component, EventEmitter} from 'angular2/core';
import {Keg, IBeer} from './keg.model';
import {KegListComponent} from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <div class="row">
        <h1>Our Taps</h1>
        <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
      </div>
    </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
    constructor() {
      var lager : IBeer = {
        beerName: "Lents Lager",
        breweryName : "ZoiglHaus",
        abv : 5,
        price: 4.50
      };
      var stout: IBeer = {
        beerName: "Black Bear Stout",
        breweryName: "Alameda Brewing",
        abv: 6.8,
        price: 6
      };
      var ipa: IBeer = {
        beerName: "Ruinator IPA",
        breweryName: "Stone Brewing",
        abv: 8.2,
        price: 6
      };
      var blackLager: IBeer = {
        beerName: "Session Black",
        breweryName: "Full Sail",
        abv: 5.4,
        price: 3
      };
      this.kegs = [
        new Keg(lager),
        new Keg(stout),
        new Keg(ipa),
        new Keg(blackLager)
      ];
    }
    kegWasSelected(clickedKeg: Keg): void{
      console.log(clickedKeg);
    }
}
