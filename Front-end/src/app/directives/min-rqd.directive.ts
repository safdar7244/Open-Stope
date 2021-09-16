import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinRqd],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinRqdDirective, multi: true}]
})
export class MinRqdDirective implements Validator {
  @Input()
  appMinRqd:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinRqd)? {"appMinRqd": true}: null;
  }
}
