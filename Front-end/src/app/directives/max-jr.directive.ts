import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';


@Directive({
  selector: '[appMaxJr], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxJrDirective, multi: true}]
})
export class MaxJrDirective implements Validator {
  @Input()
  appMaxJr:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxJr)? {"appMaxJr": true}: null;
  }
}