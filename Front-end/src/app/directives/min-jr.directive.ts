import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinJr],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinJrDirective, multi: true}]
})
export class MinJrDirective implements Validator {
  @Input()
  appMinJr:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinJr)? {"appMinJr": true}: null;
  }
}