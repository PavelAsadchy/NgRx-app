import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { AppState } from 'src/app/shared/stores/app.state';
import { LOAD_CUSTOMERS_ALL_ACTION } from 'src/app/shared/stores/customer/customer.actions';
import * as fromCustomer from '../../shared/stores/customer/customer.selector';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_CUSTOMERS_ALL_ACTION());
    this.customers$ = this.store.pipe(select(fromCustomer.GET_CUSTOMERS_SELECTOR));
  }

}
