import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxSideWidth], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxSideWidthDirective, multi: true}]
})
export class MaxSideWidthDirective implements Validator {
  @Input()
  appMaxSideWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxSideWidth)? {"appMaxSideWidth": true}: null;
  }
}
