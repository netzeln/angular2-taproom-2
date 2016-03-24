import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from './keg.component';
import {EditKegComponent} from './edit-keg.component';
import {AddKegComponent} from './add-keg.component';
import {PintsLeftPipe} from './pints-left.pipe';
import {StrengthPipe} from './strength-pipe.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PintsLeftPipe, StrengthPipe],
  directives: [KegComponent, EditKegComponent, AddKegComponent],
  template: `
    <div class="col-md-6">
      <select (change)="onChangePintsLeft($event.target.value)" class="filter">
        <option value="all">Show ALL Kegs</option>
        <option value="low">Show LOW Kegs</option>
      </select>
      <select (change)="onChangeStrength($event.target.value)" class="filter-by-abv">
        <option value="all-beers">Show ALL Beers</option>
        <option value="strong">Beers over 5.5% ABV</option>
        <option value="weak">Beers under 5.5% ABV</option>
      </select>
      <keg-display *ngFor="#currentKeg of kegList | low:filterLow | strength:filterAbv"
      (click)="kegClicked(currentKeg)" [class.selected]='currentKeg === selectedKeg' [class.reorder]='currentKeg.pintsLeft <= 10'[keg]='currentKeg'>
      </keg-display>
    </div>
    <div class="keg-forms col-md-6">
      <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
      <add-keg (newKeg)="addKeg($event)"></add-keg>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";
  public filterAbv: string = "all-beers";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  addKeg(kegDetails: any[]): void {
    this.kegList.push(
      new Keg(kegDetails)
    );
  }
  onChangePintsLeft(filterPintLevel) {
    this.filterLow = filterPintLevel;
  }
  onChangeStrength(filterStrength){
    this.filterAbv = filterStrength;
  }

}
