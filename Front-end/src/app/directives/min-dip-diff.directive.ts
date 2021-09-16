import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinDipDiff],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinDipDiffDirective, multi: true}]
})
export class MinDipDiffDirective implements Validator {
  @Input()
  appMinDipDiff:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinDipDiff)? {"appMinDipDiff": true}: null;
  }
}