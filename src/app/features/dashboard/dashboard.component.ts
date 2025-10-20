import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TrainStation } from '../../models/train-station.model';
import * as StationActions from '../../store/actions/station.actions';
import * as StationSelectors from '../../store/selectors/station.selectors';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  private readonly store = inject(Store<AppState>);

  stations$ = this.store.select(StationSelectors.selectFilteredStations);
  searchTerm$ = this.store.select(StationSelectors.selectSearchTerm);

  ngOnInit(): void {
    this.store.dispatch(StationActions.loadStations());
  }

  onSearch(searchTerm: string): void {
    this.store.dispatch(StationActions.searchStations({ searchTerm }));
  }

  onClickSelectStation(station: TrainStation): void {
    this.store.dispatch(StationActions.selectStation({ station }));
  }
}
