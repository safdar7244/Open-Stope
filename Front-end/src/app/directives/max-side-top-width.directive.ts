import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';
@Directive({
  selector: '[appMaxSideTopWidth], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxSideTopWidthDirective, multi: true}]
})
export class MaxSideTopWidthDirective implements Validator {

  @Input()
  appMaxSideTopWidth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxSideTopWidth)? {"appMaxSideTopWidth": true}: null;
  }

}
