import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxJn], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxJnDirective, multi: true}]
})
export class MaxJnDirective implements Validator {
  @Input()
  appMaxJn:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxJn)? {"appMaxJn": true}: null;
  }
}