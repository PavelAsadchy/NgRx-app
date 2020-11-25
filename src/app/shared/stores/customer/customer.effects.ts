import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../../services/customer.service';
import * as customerActions from './customer.actions';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Customer } from '../../models/customer.model';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
  ) {}

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.LOAD_CUSTOMERS_ALL_ACTION),
      mergeMap(() => {
        return this.customerService.getCustomers().pipe(
          map((customers: Customer[]) => {
            return customerActions.LOAD_CUSTOMERS_ALL_SUCCESS_ACTION({ loadedCustomers: customers });
          })
        );
      }),
      catchError(error => of(customerActions.LOAD_CUSTOMERS_ALL_FAIL_ACTION({ err: error}))
      )
    )
  );
}
