import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinFhWidth],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinFhWidthDirective, multi: true}]
})
export class MinFhWidthDirective implements Validator {
  @Input()
  appMinFhWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinFhWidth)? {"appMinFhWidth": true}: null;
  }
}