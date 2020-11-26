import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model';

export enum CustomerActionsType {
  LOAD_CUSTOMERS_ALL = '[CUSTOMER] Load Customers All',
  LOAD_CUSTOMERS_ALL_SUCCESS = '[CUSTOMER] Load Customers All Success',
  LOAD_CUSTOMERS_ALL_FAIL = '[CUSTOMER] Load Customers All Fail',
  LOAD_CUSTOMER = '[CUSTOMER] Load Customer',
  LOAD_CUSTOMER_SUCCESS = '[CUSTOMER] Load Customer Success',
  LOAD_CUSTOMER_FAIL = '[CUSTOMER] Load Customer Fail',
  CREATE_CUSTOMER = '[CUSTOMER] Create Customer',
  CREATE_CUSTOMER_SUCCESS = '[CUSTOMER] Create Customer Success',
  CREATE_CUSTOMER_FAIL = '[CUSTOMER] Create Customer Fail',
  UPDATE_CUSTOMER = '[CUSTOMER] Update Customer',
  UPDATE_CUSTOMER_SUCCESS = '[CUSTOMER] Update Customer Success',
  UPDATE_CUSTOMER_FAIL = '[CUSTOMER] Update Customer Fail',
  DELETE_CUSTOMER = '[CUSTOMER] Delete Customer',
  DELETE_CUSTOMER_SUCCESS = '[CUSTOMER] Delete Customer Success',
  DELETE_CUSTOMER_FAIL = '[CUSTOMER] Delete Customer Fail',
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

export const LOAD_CUSTOMER_ACTION = createAction(
  CustomerActionsType.LOAD_CUSTOMER,
  props<{ customerId: number }>()
);

export const LOAD_CUSTOMER_SUCCESS_ACTION = createAction(
  CustomerActionsType.LOAD_CUSTOMER_SUCCESS,
  props<{ loadedCustomers: Customer }>()
);

export const LOAD_CUSTOMER_FAIL_ACTION = createAction(
  CustomerActionsType.LOAD_CUSTOMER_FAIL,
  props<{ err: string }>()
);

export const CREATE_CUSTOMER_ACTION = createAction(
  CustomerActionsType.CREATE_CUSTOMER,
  props<{ newCustomer: Customer }>()
);

export const CREATE_CUSTOMER_SUCCESS_ACTION = createAction(
  CustomerActionsType.CREATE_CUSTOMER_SUCCESS,
  props<{ newCustomer: Customer }>()
);

export const CREATE_CUSTOMER_FAIL_ACTION = createAction(
  CustomerActionsType.CREATE_CUSTOMER_FAIL,
  props<{ err: string }>()
);

export const UPDATE_CUSTOMER_ACTION = createAction(
  CustomerActionsType.UPDATE_CUSTOMER,
  props<{ customer: Customer }>()
);

export const UPDATE_CUSTOMER_SUCCESS_ACTION = createAction(
  CustomerActionsType.UPDATE_CUSTOMER_SUCCESS,
  props<{ customer: Update<Customer> }>()
);

export const UPDATE_CUSTOMER_FAIL_ACTION = createAction(
  CustomerActionsType.UPDATE_CUSTOMER_FAIL,
  props<{ err: string }>()
);

export const DELETE_CUSTOMER_ACTION = createAction(
  CustomerActionsType.DELETE_CUSTOMER,
  props<{ customerId: number }>()
);

export const DELETE_CUSTOMER_SUCCESS_ACTION = createAction(
  CustomerActionsType.DELETE_CUSTOMER_SUCCESS,
  props<{ customerId: number }>()
);

export const DELETE_CUSTOMER_FAIL_ACTION = createAction(
  CustomerActionsType.DELETE_CUSTOMER_FAIL,
  props<{ err: string }>()
);
