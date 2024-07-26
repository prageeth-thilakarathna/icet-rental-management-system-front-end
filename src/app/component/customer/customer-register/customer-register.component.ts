import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer/customer.service';
import { Customer } from '../../../model/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent implements OnInit {

  private customerService = inject(CustomerService);

  customer = new Customer('', '', '');

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.customerService.addCustomer(this.customer);
  }




}
