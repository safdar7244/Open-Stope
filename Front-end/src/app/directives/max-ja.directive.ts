import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxJa], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxJaDirective, multi: true}]
})
export class MaxJaDirective implements Validator {
  @Input()
  appMaxJa:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxJa)? {"appMaxJa": true}: null;
  }
}