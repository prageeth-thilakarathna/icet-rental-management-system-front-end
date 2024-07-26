import { Routes } from '@angular/router';
import { CustomerRegisterComponent } from './component/customer/customer-register/customer-register.component';
import { CustomerViewComponent } from './component/customer/customer-view/customer-view.component';

export const routes: Routes = [
    {
        path: 'customer', children: [
            { path: 'register', component: CustomerRegisterComponent },
            { path: 'view', component: CustomerViewComponent }
        ]
    },
    { path: '', redirectTo: '/customer/view', pathMatch: 'full' }
];
