import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Customer } from '../../models/customer.model';

export interface CustomerState extends EntityState<Customer> {
  selectedCustomerId: number;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const CUSTOMER_ADAPTER: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const DEFAULT_CUSTOMER_STATE: CustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: true,
  error: null,
};

export const INITIAL_CUSTOMER_STATE = CUSTOMER_ADAPTER.getInitialState(DEFAULT_CUSTOMER_STATE);
