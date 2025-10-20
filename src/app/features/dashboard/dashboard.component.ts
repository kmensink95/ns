import { Component, OnInit } from '@angular/core';
import { TrainStationsService } from '../../services/train-stations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly trainStationsService: TrainStationsService) {}

  ngOnInit(): void {
    this.trainStationsService.getTrainStations().subscribe((stations) => {
      console.log('Train Stations:', stations);
    });
  }
}
