import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TrainStationsService } from '../../services/train-stations.service';
import * as StationActions from '../actions/station.actions';

@Injectable()
export class StationEffects {
  private actions$ = inject(Actions);
  private trainStationsService = inject(TrainStationsService);

  loadStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationActions.loadStations),
      switchMap(() =>
        this.trainStationsService.getTrainStations().pipe(
          map((stations) => {
            return StationActions.loadStationsSuccess({ stations });
          }),
          catchError((error) =>
            of(
              StationActions.loadStationsFailure({
                error: error.message || 'Failed to load stations',
              })
            )
          )
        )
      )
    )
  );
}
