import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormPageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    // initialization logic
  }

  onSubmit(): void {
    // Check if the form is valid
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
    });
  }
}
