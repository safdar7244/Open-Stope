import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinStopeDip],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinStopeDipDirective, multi: true}]
})
export class MinStopeDipDirective implements Validator {
  @Input()
  appMinStopeDip:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinStopeDip)? {"appMinStopeDip": true}: null;
  }
}

