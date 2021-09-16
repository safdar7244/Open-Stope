import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinSideTopWidth],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinSideTopWidthDirective, multi: true}]
})
export class MinSideTopWidthDirective implements Validator{

  @Input()
  appMinSideTopWidth:number;
  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinSideTopWidth)? {"appMinSideTopWidth": true}: null;
  }

}
