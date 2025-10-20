import { createReducer, on } from '@ngrx/store';
import { TrainStation } from '../../models/train-station.model';
import * as StationActions from '../actions/station.actions';

export interface StationState {
  stations: TrainStation[];
  filteredStations: TrainStation[];
  selectedStation: TrainStation | null;
  searchTerm: string;
  loading: boolean;
  error: string | null;
}

export const initialState: StationState = {
  stations: [],
  filteredStations: [],
  selectedStation: null,
  searchTerm: '',
  loading: false,
  error: null,
};

export const stationReducer = createReducer(
  initialState,

  on(StationActions.loadStations, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(StationActions.loadStationsSuccess, (state, { stations }) => ({
    ...state,
    stations,
    filteredStations: stations,
    loading: false,
    error: null,
  })),

  on(StationActions.loadStationsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(StationActions.searchStations, (state, { searchTerm }) => {
    const filteredStations =
      searchTerm.trim() === ''
        ? state.stations
        : state.stations.filter(
            (station) =>
              station.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
              station.code.toLowerCase().includes(searchTerm.toLowerCase())
          );

    return {
      ...state,
      searchTerm,
      filteredStations,
    };
  }),

  on(StationActions.clearSearch, (state) => ({
    ...state,
    searchTerm: '',
    filteredStations: state.stations,
  })),

  on(StationActions.selectStation, (state, { station }) => ({
    ...state,
    selectedStation: station,
  })),

  on(StationActions.clearSelection, (state) => ({
    ...state,
    selectedStation: null,
  }))
);
