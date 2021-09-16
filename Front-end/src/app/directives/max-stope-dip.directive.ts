import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxStopeDip], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxStopeDipDirective, multi: true}]
})
export class MaxStopeDipDirective implements Validator {
  @Input()
  appMaxStopeDip:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxStopeDip)? {"appMaxStopeDip": true}: null;
  }
}
