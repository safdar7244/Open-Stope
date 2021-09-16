import { Predict } from '../models/predict.model';
import { Subject } from 'rxjs';

export class PredictionService {
    predictChanged = new Subject<Predict>();

    private prediction: Predict;

    getPrediction() {
        return this.prediction;
    }

    setPrediction(prediction: Predict) {
        this.prediction = prediction;
      console.log('service' ,this.prediction);
        this.predictChanged.next(this.prediction);
      }


}
