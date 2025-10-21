import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private formSubject = new BehaviorSubject<Form | null>(null);

  setForm(form: Form): void {
    this.formSubject.next(form);
  }

  getForm(): Observable<Form | null> {
    return this.formSubject.asObservable();
  }
}
