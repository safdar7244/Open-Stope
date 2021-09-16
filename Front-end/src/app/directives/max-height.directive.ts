import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxHeight], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxHeightDirective, multi: true}]
})
export class MaxHeightDirective implements Validator {
  @Input()
  appMaxHeight:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxHeight)? {"appMaxHeight": true}: null;
  }
}
