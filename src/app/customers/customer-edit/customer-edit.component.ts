import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { AppState } from 'src/app/shared/stores/app.state';
import { UPDATE_CUSTOMER_ACTION } from 'src/app/shared/stores/customer/customer.actions';
import { GET_CURRENT_CUSTOMER } from 'src/app/shared/stores/customer/customer.selector';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required],
      id: null,
    });

    const customers$: Observable<Customer> = this.store.select(GET_CURRENT_CUSTOMER);

    customers$.subscribe((currentCustomer: Customer) => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id,
        });
      }
    });
  }

  updateCustomer(): void {
    const updatedCustomer: Customer = {
      name: this.customerForm.get('name').value,
      phone: this.customerForm.get('phone').value,
      address: this.customerForm.get('address').value,
      membership: this.customerForm.get('membership').value,
      id: this.customerForm.get('id').value,
    };

    this.store.dispatch(UPDATE_CUSTOMER_ACTION({ customer: updatedCustomer }));
  }

}
