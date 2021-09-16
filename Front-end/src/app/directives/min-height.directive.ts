import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinHeight],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinHeightDirective, multi: true}]
})
export class MinHeightDirective implements Validator {
  @Input()
  appMinHeight:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinHeight)? {"appMinHeight": true}: null;
  }
}
