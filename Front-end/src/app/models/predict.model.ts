import {Result} from './result.model';
export class Predict {
    constructor(
      public footwall: Result = new Result,
      public hangingwall: Result = new Result,
      public sidewall: Result = new Result,
      public stope_back: Result = new Result) {}
}
