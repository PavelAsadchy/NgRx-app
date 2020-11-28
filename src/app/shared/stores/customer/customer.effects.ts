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

  loadCustomersAll$ = createEffect(() =>
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

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.LOAD_CUSTOMER_ACTION),
      mergeMap((action: { type: string, customerId: number}) => {
        return this.customerService.getCustomerById(action.customerId).pipe(
          map((customer: Customer) => {
            return customerActions.LOAD_CUSTOMER_SUCCESS_ACTION({ loadedCustomer: customer });
          })
        );
      }),
      catchError(error => of(customerActions.LOAD_CUSTOMER_FAIL_ACTION({ err: error}))
      )
    )
  );

  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.CREATE_CUSTOMER_ACTION),
      mergeMap((action: { type: string, newCustomer: Customer }) => {
        return this.customerService.createCustomer(action.newCustomer).pipe(
          map((customer: Customer) => {
            return customerActions.CREATE_CUSTOMER_SUCCESS_ACTION({ newCustomer: customer });
          })
        );
      }),
      catchError(error => of(customerActions.LOAD_CUSTOMER_FAIL_ACTION({ err: error}))
      )
    )
  );

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.UPDATE_CUSTOMER_ACTION),
      mergeMap((action: { type: string, customer: Customer }) => {
        return this.customerService.updateCustomer(action.customer).pipe(
          map((updatedCustomer: Customer) => {
            return customerActions.UPDATE_CUSTOMER_SUCCESS_ACTION({
              update: {
                id: updatedCustomer.id,
                changes: updatedCustomer,
              }
            });
          })
        );
      }),
      catchError(error => of(customerActions.UPDATE_CUSTOMER_FAIL_ACTION({ err: error}))
      )
    )
  );

  deleteCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.DELETE_CUSTOMER_ACTION),
      mergeMap((action: { type: string, customerId: number }) => {
        return this.customerService.deleteCustomer(action.customerId).pipe(
          map(() => customerActions.DELETE_CUSTOMER_SUCCESS_ACTION({ customerId: action.customerId }))
        );
      }),
      catchError(error => of(customerActions.DELETE_CUSTOMER_FAIL_ACTION({ err: error}))
      )
    )
  );

}
