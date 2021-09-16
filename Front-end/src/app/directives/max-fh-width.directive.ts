import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';
@Directive({
  selector: '[appMaxFhWidth], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxFhWidthDirective, multi: true}]
})
export class MaxFhWidthDirective implements Validator {
  @Input()
  appMaxFhWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxFhWidth)? {"appMaxFhWidth": true}: null;
  }
}

