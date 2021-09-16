import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinDepth],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinDepthDirective, multi: true}]
})
export class MinDepthDirective implements Validator {
  @Input()
  appMinDepth:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinDepth)? {"appMinDepth": true}: null;
  }
}