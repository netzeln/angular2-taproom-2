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
    <div class="col-md-6">
      <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]='currentKeg === selectedKeg' [class.reorder]='currentKeg.pintsLeft <= 10'[keg]='currentKeg'>
      </keg-display>
    </div>
    <div class="keg-forms col-md-6">
      <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
    </div>
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
