import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private bastURL = 'http://localhost:8080';

  addCustomer(customer: Customer) {
    this.http.post<Customer>(this.bastURL + '/customer/add', customer, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe();
  }
}
