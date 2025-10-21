import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private formSubject = new BehaviorSubject<Form | null>(null);

  setForm(form: Form) {
    this.formSubject.next(form);
  }

  getForm() {
    return this.formSubject.asObservable();
  }

  getCurrentForm() {
    return this.formSubject.value;
  }
}
