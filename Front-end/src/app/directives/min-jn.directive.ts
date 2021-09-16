import { Directive,Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinJn],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinJnDirective, multi: true}]
})
export class MinJnDirective implements Validator {
  @Input()
  appMinJn:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinJn)? {"appMinJn": true}: null;
  }
}