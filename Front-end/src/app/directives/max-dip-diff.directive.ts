import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxDipDiff], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxDipDiffDirective, multi: true}]
})
export class MaxDipDiffDirective implements Validator {
  @Input()
  appMaxDipDiff:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxDipDiff)? {"appMaxDipDiff": true}: null;
  }
}