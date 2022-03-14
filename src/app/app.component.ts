import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  pdList = [
    'application',
    'zipped',
    'xrays',
    'billing',
    'finances',
    'queues',
    'programming'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      pd: new FormControl([], Validators.required)
    });
      this.change({value: []})

  }

  change(event) {

  }
}
