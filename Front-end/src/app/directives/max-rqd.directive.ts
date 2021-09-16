import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxRqd], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxRqdDirective, multi: true}]
})
export class MaxRqdDirective implements Validator {
  @Input()
  appMaxRqd:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxRqd)? {"appMaxRqd": true}: null;
  }
}
