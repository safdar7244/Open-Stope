import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinVertStress],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinVertStressDirective, multi: true}]
})
export class MinVertStressDirective implements Validator {
  @Input()
  appMinVertStress:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinVertStress)? {"appMinVertStress": true}: null;
  }
}
