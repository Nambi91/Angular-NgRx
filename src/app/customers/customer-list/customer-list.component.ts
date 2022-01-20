import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Customer } from '../customer.model';
import { LOAD_CUSTOMERS } from '../state/type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Array<Customer> = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: LOAD_CUSTOMERS });
    this.store.subscribe(
      (state: any) => (this.customers = state.customers.customers)
    );
  }
}
