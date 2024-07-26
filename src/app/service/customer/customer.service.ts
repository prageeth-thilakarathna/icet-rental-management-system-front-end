import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private bastURL = 'http://localhost:8080/customer';

  addCustomer(customer: Customer) {
    this.http.post<Customer>(this.bastURL + '/add', customer, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe();
  }

  getCustomerCount(): Observable<number> {
    return this.http.get<number>(this.bastURL + '/count');
  }

  getCustomerPerPage(pageNumber: number, pageSize: number): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.bastURL + `/page/${pageNumber}/size/${pageSize}`);
  }
}
