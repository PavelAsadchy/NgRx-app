import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_CUSTOMERS_ALL_ACTION } from 'src/app/shared/stores/customer/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_CUSTOMERS_ALL_ACTION());
    this.store.subscribe(state => {
      this.customers$ = state.customers.customers;
    });
  }

}
