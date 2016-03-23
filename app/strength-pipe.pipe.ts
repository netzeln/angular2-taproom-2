import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model'

@Pipe({
  name: 'strength',
  pure: false
})

export class StrengthPipe implements PipeTransform{
    transform(input: Keg[], args){
      var strength = args[0];
      if(strength === "strong"){
        return input.filter((keg)=>{
          return keg.abv > 5.4;
        })
      }else if(strength === "weak"){
        return input.filter((keg)=>{
          return keg.abv <= 5.4;
        })
      }else{
        return input;
      }
    }
}
