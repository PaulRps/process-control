import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Process } from 'src/app/shared/models/process.model';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { DatabaseService } from 'src/app/core/services/database.service';
// import { default as _rollupMoment } from 'moment';

const moment = /* _rollupMoment || */ _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

moment.locale('pt-br');

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ProcessFormComponent {
  processForm: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  get f() {
    return this.processForm.controls;
  }

  constructor(private databaseService: DatabaseService) {
    this.processForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      date: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.processForm.invalid) {
      this.processForm.markAllAsTouched();
      return;
    }

    const p = new Process(0, this.f.name.value, _moment(this.f.date.value).format('DD/MM/YYYY'));
    console.log(p);
    this.databaseService.save(p);
  }
}
