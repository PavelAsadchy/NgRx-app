import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../shared/stores/customer/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from '../shared/stores/customer/customer.effects';

@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', reducer),
    EffectsModule.forFeature([CustomerEffects]),
  ]
})
export class CustomersModule { }
