import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinSideWidth],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinSideWidthDirective, multi: true}]
})
export class MinSideWidthDirective implements Validator {
  @Input()
  appMinSideWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinSideWidth)? {"appMinSideWidth": true}: null;
  }
}
