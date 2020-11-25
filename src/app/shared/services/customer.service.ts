import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customersUrl = 'http://localhost:3000/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}`);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.customersUrl}/${id}`);
  }

  createCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, newCustomer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.customersUrl}/${customer.id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.customersUrl}/${id}`);
  }
}
