import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg Info:</h3>
    <label>Edit Beer Name:</label>
    <input [(ngModel)]="keg.beerName"/><br>
    <label>Edit Brewery Name:</label>
    <input [(ngModel)]="keg.breweryName"/><br>
    <label>Edit Beer ABV:</label>
    <input [(ngModel)]="keg.abv"/><br>
    <label>Edit Beer Price:</label>
    <input [(ngModel)]="keg.price"/>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
