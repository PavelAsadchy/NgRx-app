import { Action, createReducer, on } from '@ngrx/store';
import { LOAD_CUSTOMER } from './customer.actions';
import { INITIAL_CUSTOMER_STATE } from './customer.state';

const customerReducer = createReducer(
  INITIAL_CUSTOMER_STATE,
  on(LOAD_CUSTOMER, state => ({
    ...state,
    loading: true,
    loaded: false,
  }))
);

export function reducer(state = INITIAL_CUSTOMER_STATE, action: Action) {
  return customerReducer(state, action);
}
