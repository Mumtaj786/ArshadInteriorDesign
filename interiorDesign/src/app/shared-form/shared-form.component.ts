import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css']
})
export class SharedFormComponent implements OnInit {
  form: FormGroup;

  @Output() formSubmit = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      "name": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "phone": ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      "pincode": ['', Validators.required],
      "checkBox":['false']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
}
