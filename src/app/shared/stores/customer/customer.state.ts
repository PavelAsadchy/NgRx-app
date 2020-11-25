import { Customer } from '../../models/customer.model';

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const INITIAL_CUSTOMER_STATE: CustomerState = {
  customers: [],
  loading: false,
  loaded: true,
  error: null,
};
