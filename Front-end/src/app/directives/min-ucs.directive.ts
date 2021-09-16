import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinUcs],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinUcsDirective, multi: true}]
})
export class MinUcsDirective implements Validator {
  @Input()
  appMinUcs:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinUcs)? {"appMinUcs": true}: null;
  }
}
