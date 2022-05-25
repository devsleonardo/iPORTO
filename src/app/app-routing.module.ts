import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
