import { TrainStation } from './train-station.model';

export interface Form {
  selectedTrainStation: TrainStation | null;
  title: string;
  date: Date | null;
  type: string;
  description: string;
}
