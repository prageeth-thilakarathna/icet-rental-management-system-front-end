import { Component, inject } from '@angular/core';
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
export class CustomerRegisterComponent {

 private customerService = inject(CustomerService);

 customer = new Customer('', '', '');

 onSubmit(){
  this.customerService.addCustomer(this.customer);
 }



}
