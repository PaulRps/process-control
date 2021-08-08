import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'process', loadChildren: () => import('./modules/process/process.module').then((m) => m.ProcessModule) },
  { path: '', redirectTo: '/process', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* , { enableTracing: true } */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
