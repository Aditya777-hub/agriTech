import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    // ... other routes if needed ...
];


