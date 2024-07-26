import { Component, inject, OnInit } from '@angular/core';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { CustomerService } from '../../../service/customer/customer.service';
import { Observable } from 'rxjs';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit {

  private customerService = inject(CustomerService);

  count$!: Observable<number>
  pageEvent = PageEvent;
  page$!: Observable<Array<Customer>>
  customerList: Array<Customer> = [];
  length: number = 0;

  ngOnInit(): void {
    this.count$ = this.customerService.getCustomerCount();
    this.count$.subscribe(res => {
      this.length = res;
    })

    this.loadPage(0, 10);
  }

  handlePageEvent(e: PageEvent){
    this.loadPage(e.pageIndex, e.pageSize);
  }

  loadPage(pageIndex: number, pageSize: number){
    this.page$ = this.customerService.getCustomerPerPage(pageIndex, pageSize);
    this.page$.subscribe(res => {
      this.customerList = res;
    })
  }

}
