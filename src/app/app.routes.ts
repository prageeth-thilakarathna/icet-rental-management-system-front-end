import { Routes } from '@angular/router';
import { CustomerRegisterComponent } from './component/customer/customer-register/customer-register.component';

export const routes: Routes = [
    {path: 'customer', children: [
        {path: 'register', component: CustomerRegisterComponent}
    ]},
    {path: '', redirectTo: '/customer/register', pathMatch: 'full'}
];
