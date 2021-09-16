import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinModulus],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinModulusDirective, multi: true}]
})
export class MinModulusDirective implements Validator {
  @Input()
  appMinModulus:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinModulus)? {"appMinModulus": true}: null;
  }
}