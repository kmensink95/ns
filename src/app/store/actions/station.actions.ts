import { createAction, props } from '@ngrx/store';
import { TrainStation } from '../../models/train-station.model';

export const loadStations = createAction('[Station] Load Stations');

export const loadStationsSuccess = createAction(
  '[Station] Load Stations Success',
  props<{ stations: TrainStation[] }>()
);

export const loadStationsFailure = createAction(
  '[Station] Load Stations Failure',
  props<{ error: string }>()
);

export const searchStations = createAction(
  '[Station] Search Stations',
  props<{ searchTerm: string }>()
);

export const clearSearch = createAction('[Station] Clear Search');

export const selectStation = createAction(
  '[Station] Select Station',
  props<{ station: TrainStation }>()
);

export const clearSelection = createAction('[Station] Clear Selection');
