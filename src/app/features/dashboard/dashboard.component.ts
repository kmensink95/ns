import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TrainStation } from '../../models/train-station.model';
import * as StationActions from '../../store/actions/station.actions';
import * as StationSelectors from '../../store/selectors/station.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private readonly store = inject(Store<AppState>);

  stations$ = this.store.select(StationSelectors.selectFilteredStations);
  selectedStation$ = this.store.select(StationSelectors.selectSelectedStation);
  loading$ = this.store.select(StationSelectors.selectLoading);
  error$ = this.store.select(StationSelectors.selectError);
  searchTerm$ = this.store.select(StationSelectors.selectSearchTerm);
  stationCount$ = this.store.select(StationSelectors.selectStationCount);

  ngOnInit(): void {
    this.store.dispatch(StationActions.loadStations());
  }

  onSearch(searchTerm: string): void {
    this.store.dispatch(StationActions.searchStations({ searchTerm }));
  }

  onSelectStation(station: TrainStation): void {
    this.store.dispatch(StationActions.selectStation({ station }));
  }

  onClearSelection(): void {
    this.store.dispatch(StationActions.clearSelection());
  }

  onClearSearch(): void {
    this.store.dispatch(StationActions.clearSearch());
  }
}
