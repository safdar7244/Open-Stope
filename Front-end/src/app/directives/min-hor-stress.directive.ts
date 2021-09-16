import { Directive, Input } from '@angular/core';
import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMinHorStress],[ngModel], [formControl]',
  providers: [{provide:NG_VALIDATORS, useExisting:MinHorStressDirective, multi: true}]
})
export class MinHorStressDirective implements Validator {
  @Input()
  appMinHorStress:number;

  validate(c: FormControl): {[key:string]: any} {
    let v = c.value;
    return (v < this.appMinHorStress)? {"appMinHorStress": true}: null;
  }
}