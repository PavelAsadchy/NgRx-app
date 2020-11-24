import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_CUSTOMER } from 'src/app/shared/store/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_CUSTOMER());
    this.store.subscribe(state => {
      this.customers$ = state.customers.customers;
    });
  }

  trigger() {
    console.log(this.customers$)
  }

}
