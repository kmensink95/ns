import { Component, inject, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Form } from '../../models/form.model';
import { take } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import * as StationActions from '../../store/actions/station.actions';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  imports: [DatePipe],
})
export class DetailsPageComponent implements OnInit {
  private readonly formService = inject(FormService);
  private readonly store = inject(Store<AppState>);
  private readonly router = inject(Router);

  formValue?: Form | null;

  get title(): string | null {
    return this.formValue?.title ?? null;
  }

  get date(): Date | null {
    return this.formValue?.date ?? null;
  }

  get type(): string | null {
    return this.formValue?.type ?? null;
  }

  get description(): string | null {
    return this.formValue?.description ?? null;
  }

  get stationName(): string | null {
    return this.formValue?.selectedTrainStation?.naam ?? null;
  }

  ngOnInit(): void {
    this.formService
      .getForm()
      .pipe(take(1))
      .subscribe((formValue) => {
        this.formValue = formValue;
      });
  }

  onClickClose(): void {
    this.store.dispatch(StationActions.clearSelection());
    this.router.navigate(['/form']);
  }
}
