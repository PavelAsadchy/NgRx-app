import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { CustomerService } from '../../services/customer.service';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
  ) {}

  loadCustomers$ = createEffect(() => this.actions$.pipe(

  ))
}
