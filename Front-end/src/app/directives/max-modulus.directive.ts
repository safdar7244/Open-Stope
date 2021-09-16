import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxModulus], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxModulusDirective, multi: true}]
})
export class MaxModulusDirective implements Validator {
  @Input()
  appMaxModulus:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxModulus)? {"appMaxModulus": true}: null;
  }
}