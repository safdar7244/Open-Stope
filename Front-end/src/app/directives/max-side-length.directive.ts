import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxSideLength], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxSideLengthDirective, multi: true}]
})
export class MaxSideLengthDirective implements Validator {

  @Input()
  appMaxSideLength:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxSideLength)? {"appMaxSideLength": true}: null;
  }

}
