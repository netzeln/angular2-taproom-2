import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg Info:</h3>
    <h4>Edit Beer Name:</h4>
    <input [(ngModel)]="keg.beerName" class="col-sm-8 task-form"/><br>
    <h4>Edit Brewery Name:</h4>
    <input [(ngModel)]="keg.breweryName" class="col-sm-8 task-form"/><br>
    <h4>Edit Beer ABV:</h4>
    <input [(ngModel)]="keg.abv" class="col-sm-8 task-form"/><br>
    <h4>Edit Beer Price:</h4>
    <input [(ngModel)]="keg.price" class="col-sm-8 task-form"/>
  `
})

export class EditKegComponent {
  public keg: Keg;
}