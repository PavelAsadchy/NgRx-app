import { createSelector, createFeatureSelector} from '@ngrx/store';
import { CustomerState, CUSTOMER_ADAPTER } from './customer.state';

export const FEATURE_KEY = 'customers';

export const SELECT_CUSTOMER_FEATURE = createFeatureSelector<CustomerState>(
  FEATURE_KEY
);

export const GET_CUSTOMERS_SELECTOR = createSelector(
  SELECT_CUSTOMER_FEATURE,
  CUSTOMER_ADAPTER.getSelectors().selectAll
);

export const GET_CUSTOMERS_LOADING_SELECTOR = createSelector(
  SELECT_CUSTOMER_FEATURE,
  (state: CustomerState) => state.loading
);

export const GET_CUSTOMERS_LOADED_SELECTOR = createSelector(
  SELECT_CUSTOMER_FEATURE,
  (state: CustomerState) => state.loaded
);

export const GET_CUSTOMERS_ERROR_SELECTOR = createSelector(
  SELECT_CUSTOMER_FEATURE,
  (state: CustomerState) => state.error
);

