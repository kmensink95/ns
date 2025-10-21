import { TrainStation } from './train-station.model';

export interface Form {
  selectedTrainStation: TrainStation | null;
  title: string;
  date: string;
  type: string;
  description: string;
}
