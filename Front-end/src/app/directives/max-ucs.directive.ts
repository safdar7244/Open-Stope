import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxUcs], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxUcsDirective, multi: true}]
})
export class MaxUcsDirective implements Validator {
  @Input()
  appMaxUcs:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxUcs)? {"appMaxUcs": true}: null;
  }
}
