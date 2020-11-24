import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customers',
    loadChildren: () => import('src/app/customers/customers.module').then(module => module.CustomersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
