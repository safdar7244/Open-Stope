import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxDepth], [ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MaxDepthDirective, multi: true}]
})
export class MaxDepthDirective implements Validator {
  @Input()
  appMaxDepth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v > this.appMaxDepth)? {"appMaxDepth": true}: null;
  }
}