import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {LoginComponent } from './user/login/login.component';


const routes: Routes = [

  {path: '', component: HomeComponent},

  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'user', component: UserComponent},
  {path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginComponent },


  {path: '', redirectTo: 'order', pathMatch: 'full'},
  {path: 'orders' , component: OrdersComponent},
  {path: 'order', children: [
  {path: '', component: OrderComponent},
  {path: 'edit/: id', component: OrderComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
