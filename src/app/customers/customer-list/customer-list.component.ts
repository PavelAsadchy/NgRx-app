import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { AppState } from 'src/app/shared/stores/app.state';
import { DELETE_CUSTOMER_ACTION, LOAD_CUSTOMERS_ALL_ACTION, LOAD_CUSTOMER_ACTION } from 'src/app/shared/stores/customer/customer.actions';
import * as fromCustomer from '../../shared/stores/customer/customer.selector';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  error$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_CUSTOMERS_ALL_ACTION());
    this.customers$ = this.store.pipe(select(fromCustomer.GET_CUSTOMERS_SELECTOR));
    this.error$ = this.store.pipe(select(fromCustomer.GET_CUSTOMERS_ERROR_SELECTOR));
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure you want to delete the customer?')) {
      this.store.dispatch(DELETE_CUSTOMER_ACTION({ customerId: customer.id }));
    }
  }

  editCustomer(customer: Customer): void {
    this.store.dispatch(LOAD_CUSTOMER_ACTION({ customerId: customer.id }));
  }

}
