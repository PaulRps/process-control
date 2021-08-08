import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessAddComponent } from './components/process-add/process-add.component';
import { ProcessEditComponent } from './components/process-edit/process-edit.component';
import { ProcessFormComponent } from './components/process-form/process-form.component';
import { ProcessTableComponent } from './components/process-table/process-table.component';
import { ProcessPageComponent } from './page/process-page.component';
import { ProcessRoutingModule } from './process.routing.module';

@NgModule({
  declarations: [
    ProcessPageComponent,
    ProcessTableComponent,
    ProcessFormComponent,
    ProcessAddComponent,
    ProcessEditComponent,
  ],
  imports: [CoreModule, SharedModule, ProcessRoutingModule, ReactiveFormsModule, CommonModule],
  exports: [],
})
export class ProcessModule {}
