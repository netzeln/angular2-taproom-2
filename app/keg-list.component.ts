import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from './keg.component';
import {EditKegComponent} from './edit-keg.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]='currentKeg === selectedKeg' [keg]='currentKeg'>
    </keg-display>
    <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>

  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}
