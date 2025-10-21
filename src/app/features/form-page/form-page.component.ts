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

interface FormModel {
  title: FormControl<string>;
  date: FormControl<string>;
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

  station$ = this.store.select(StationSelectors.selectSelectedStation);

  form!: FormGroup<FormModel>;

  ngOnInit(): void {
    this.form = new FormGroup<FormModel>({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      date: new FormControl('', {
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

  onSubmit(): void {
    if (!this.form.invalid) return;
  }
}
