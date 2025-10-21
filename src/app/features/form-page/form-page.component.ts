import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import * as StationSelectors from '../../store/selectors/station.selectors';
import { FormService } from '../../services/form.service';
import * as StationActions from '../../store/actions/station.actions';
import { TrainStation } from '../../models/train-station.model';
import { Router } from '@angular/router';

interface FormModel {
  selectedTrainStation: FormControl<TrainStation | null>;
  title: FormControl<string>;
  date: FormControl<Date | null>;
  type: FormControl<'failure' | 'information' | 'service'>;
  description: FormControl<string>;
}

@Component({
  standalone: true,
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormPageComponent implements OnInit {
  private readonly store = inject(Store<AppState>);
  private readonly router = inject(Router);
  private readonly formService = inject(FormService);

  selectedStation$ = this.store.select(StationSelectors.selectSelectedStation);
  stations$ = this.store.select(StationSelectors.selectFilteredStations);
  searchTerm$ = this.store.select(StationSelectors.selectSearchTerm);

  form!: FormGroup<FormModel>;

  ngOnInit(): void {
    this.store.dispatch(StationActions.loadStations());

    this.form = new FormGroup<FormModel>({
      selectedTrainStation: new FormControl<TrainStation | null>(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      date: new FormControl(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      type: new FormControl('failure', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', { nonNullable: true }),
    });
  }

  onSearch(searchTerm: string): void {
    this.store.dispatch(StationActions.searchStations({ searchTerm }));
  }

  onClickSelectStation(station: TrainStation): void {
    this.store.dispatch(StationActions.selectStation({ station }));
    this.form.get('selectedTrainStation')?.setValue(station);
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.formService.setForm(this.form.getRawValue());
    this.router.navigate(['/details']);
  }
}
