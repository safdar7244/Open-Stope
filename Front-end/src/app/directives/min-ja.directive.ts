import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinJa],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinJaDirective, multi: true}]
})
export class MinJaDirective implements Validator {
  @Input()
  appMinJa:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinJa)? {"appMinJa": true}: null;
  }
}