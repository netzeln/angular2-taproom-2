import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from './keg.component';
import { SellPintComponent } from './sell-pint.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, SellPintComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]='currentKeg === selectedKeg' [keg]='currentKeg'>
    </keg-display>
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
