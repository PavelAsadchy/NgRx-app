import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model';

export enum CustomerActionsType {
  LOAD_CUSTOMERS_ALL = '[CUSTOMER] Load Customers',
  LOAD_CUSTOMERS_ALL_SUCCESS = '[CUSTOMER] Load Customers Success',
  LOAD_CUSTOMERS_ALL_FAIL = '[CUSTOMER] Load Customers Fail',
}

export const LOAD_CUSTOMERS_ALL_ACTION = createAction(CustomerActionsType.LOAD_CUSTOMERS_ALL);

export const LOAD_CUSTOMERS_ALL_SUCCESS_ACTION = createAction(
  CustomerActionsType.LOAD_CUSTOMERS_ALL_SUCCESS,
  props<{ loadedCustomers: Customer[] }>()
);

export const LOAD_CUSTOMERS_ALL_FAIL_ACTION = createAction(
  CustomerActionsType.LOAD_CUSTOMERS_ALL_FAIL,
  props<{ err: string }>()
);
