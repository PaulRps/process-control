import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessAddComponent } from './components/process-add/process-add.component';
import { ProcessEditComponent } from './components/process-edit/process-edit.component';
import { ProcessTableComponent } from './components/process-table/process-table.component';
import { ProcessPageComponent } from './page/process-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessPageComponent,
    // children: [
    //   { path: 'edit/:id', component: ProcessEditComponent },
    //   { path: 'add', component: ProcessAddComponent },
    // ],
  },
  { path: 'edit/:id', component: ProcessEditComponent },
  { path: 'add', component: ProcessAddComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessRoutingModule {}
