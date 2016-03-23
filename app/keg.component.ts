import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="kegs">
      <h3>{{keg.breweryName}}, <em>{{keg.beerName}}</em></h3>
      <h4>{{keg.abv}}% ABV,  \${{keg.price}}</h4>
      <h5>Pints Left: {{keg.pintsLeft}}</h5>
    </div>
  `
})

export class KegComponent{
  public keg: Keg;
}
