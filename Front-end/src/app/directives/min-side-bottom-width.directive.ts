import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinSideBottomWidth],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinSideBottomWidthDirective, multi: true}]
})
export class MinSideBottomWidthDirective implements Validator {
  @Input()
  appMinSideBottomWidth:number;
  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinSideBottomWidth)? {"appMinSideBottomWidth": true}: null;
  }
  

}
