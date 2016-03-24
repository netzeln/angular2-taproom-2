import {Component, EventEmitter} from 'angular2/core';
import {Keg, IBeer} from './keg.model';

@Component ({
  selector: 'add-keg',
  outputs: ['newKeg'],
  template: `
    <h3>Tap a New Keg</h3>
      <label>New Beer Name:</label>
      <input placeholder="Beer Name" type="text" #newBeerName required><br>
      <label>New Brewery:</label>
      <input placeholder="Brewery Name" type="text" #newBrewery required><br>
      <label>New Beer ABV Percentage:</label>
      <input placeholder="ABV%" type="number" step="any" #newAbv min="0" required><br>
      <label>New Beer Pint Price:</label>
      <input placeholder="Beer Price (in dollars)" type="number" step="any" min="0" #newPrice required><br>
      <button (click)="addKeg(newBeerName, newBrewery, newAbv, newPrice)" class="btn btn-danger">TAP</button>
  `
})

export class AddKegComponent {
  public newKeg: EventEmitter<IBeer>;
  constructor(){
    this.newKeg = new EventEmitter();
  }
  addKeg(inputBeerName: HTMLInputElement, inputBrewery: HTMLInputElement, inputAbv: HTMLInputElement, inputPrice: HTMLInputElement){
    var kegInfo : IBeer = {
      beerName: inputBeerName.value,
      breweryName: inputBrewery.value,
      abv:  parseFloat(inputAbv.value),
      price: parseFloat(inputPrice.value)
    };

    if((inputBeerName.value === "") || (inputBrewery.value === "") || (inputAbv.value === "") || (inputPrice.value === "")) {
      alert("Please fill out all the fields before adding a new keg!");
    } else {
      this.newKeg.emit(kegInfo);
      inputBeerName.value = "";
      inputBrewery.value = "";
      inputAbv.value = "";
      inputPrice.value = "";
    }
  }
}
