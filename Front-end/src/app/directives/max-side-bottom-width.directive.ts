import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxSideBottomWidth], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxSideBottomWidthDirective, multi: true}]
})
export class MaxSideBottomWidthDirective implements Validator {

  @Input()
  appMaxSideBottomWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxSideBottomWidth)? {"appMaxSideBottomWidth": true}: null;
  }

}
