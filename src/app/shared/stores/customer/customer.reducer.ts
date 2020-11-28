import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerStateActions from './customer.actions';
import { CustomerState, CUSTOMER_ADAPTER, INITIAL_CUSTOMER_STATE } from './customer.state';

const customerReducer = createReducer(
  INITIAL_CUSTOMER_STATE,
  on(CustomerStateActions.LOAD_CUSTOMERS_ALL_ACTION, state => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(CustomerStateActions.LOAD_CUSTOMERS_ALL_SUCCESS_ACTION, (state, { loadedCustomers }) => {
    return CUSTOMER_ADAPTER.setAll(loadedCustomers, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(CustomerStateActions.LOAD_CUSTOMERS_ALL_FAIL_ACTION, (state, { err }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    error: err,
  })),

  on(CustomerStateActions.LOAD_CUSTOMER_SUCCESS_ACTION, (state, { loadedCustomer }) => {
    return CUSTOMER_ADAPTER.addOne(loadedCustomer, {
      ...state,
      selectedCustomerId: loadedCustomer.id,
    });
  }),
  on(CustomerStateActions.LOAD_CUSTOMER_FAIL_ACTION, (state, { err }) => ({
    ...state,
    error: err,
  })),

  on(CustomerStateActions.CREATE_CUSTOMER_SUCCESS_ACTION, (state, { newCustomer }) => {
    return CUSTOMER_ADAPTER.addOne(newCustomer, state);
  }),
  on(CustomerStateActions.CREATE_CUSTOMER_FAIL_ACTION, (state, { err }) => ({
    ...state,
    error: err,
  })),

  on(CustomerStateActions.UPDATE_CUSTOMER_SUCCESS_ACTION, (state, { update }) => {
    return CUSTOMER_ADAPTER.updateOne(update, state);
  }),
  on(CustomerStateActions.UPDATE_CUSTOMER_FAIL_ACTION, (state, { err }) => ({
    ...state,
    error: err,
  })),

  on(CustomerStateActions.DELETE_CUSTOMER_SUCCESS_ACTION, (state, { customerId }) => {
    return CUSTOMER_ADAPTER.removeOne(customerId, state);
  }),
  on(CustomerStateActions.DELETE_CUSTOMER_FAIL_ACTION, (state, { err }) => ({
    ...state,
    error: err,
  })),


);

export function reducer(state: CustomerState, action: Action) {
  return customerReducer(state, action);
}
