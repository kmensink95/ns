export interface StationType {
  type: string;
  code: number;
  knooppunt: boolean;
}

export interface TrainStation {
  naam: string;
  code: string;
  xCoordinaat: number;
  yCoordinaat: number;
  stationType: StationType;
  landCode: string;
}
