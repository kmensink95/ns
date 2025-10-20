import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrainStation } from '../models/train-station.model';

export interface ApiResponse {
  record: TrainStation[];
}

@Injectable({
  providedIn: 'root',
})
export class TrainStationsService {
  private readonly apiUrl =
    'https://api.jsonbin.io/v3/b/68f0f147d0ea881f40a6513b';

  constructor(private http: HttpClient) {}

  getTrainStations(): Observable<TrainStation[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.record || []));
  }
}
