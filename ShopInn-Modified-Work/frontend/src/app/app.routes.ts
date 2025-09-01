import { Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { ProductsComponent } from '../products/products.component';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { RegisterComponent } from '../register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'profile-settings', component: ProfileSettingsComponent },
    { path: 'register', component: RegisterComponent }
];