import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesListComponent
  },
  {
    path: 'details/:id',
    component: ServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
