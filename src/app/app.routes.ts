import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './(landingPage)/home/home.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { ProeductListComponent } from './product/proeduct-list/proeduct-list.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'dynamic/:id', component: DynamicPageComponent },
  { path: 'products', component: ProeductListComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];
