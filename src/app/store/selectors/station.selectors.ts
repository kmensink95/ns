import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationState } from '../reducers/station.reducer';

export const selectStationState =
  createFeatureSelector<StationState>('stations');

export const selectAllStations = createSelector(
  selectStationState,
  (state) => state.stations
);

export const selectFilteredStations = createSelector(
  selectStationState,
  (state) => state.filteredStations
);

export const selectSelectedStation = createSelector(
  selectStationState,
  (state) => state.selectedStation
);

export const selectSearchTerm = createSelector(
  selectStationState,
  (state) => state.searchTerm
);

export const selectLoading = createSelector(
  selectStationState,
  (state) => state.loading
);
