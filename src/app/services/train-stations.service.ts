import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainStationsService {
  private readonly apiUrl =
    'https://api.jsonbin.io/v3/b/68f0f147d0ea881f40a6513b';

  constructor(private http: HttpClient) {}

  getTrainStations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
