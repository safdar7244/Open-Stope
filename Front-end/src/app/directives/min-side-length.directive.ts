import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinSideLength],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinSideLengthDirective, multi: true}]
})
export class MinSideLengthDirective implements Validator {

  @Input()
  appMinSideLength:number;
  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinSideLength)? {"appMinSideLength": true}: null;
  }

}
