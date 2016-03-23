import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "low",
  pure: false
})
export class PintsLeftPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredPintLevel = args[0];
    if(desiredPintLevel === "low") {
      return input.filter((keg) => {
        return keg.pintsLeft <= 10;
      })
    } else {
      return input;
    }
  }
}
