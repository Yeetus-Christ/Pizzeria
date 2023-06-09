import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { AuthGuard } from './auth/auth.guard';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CourierComponent } from './courier/courier.component';
import { LoginCourierComponent } from './login-courier/login-courier.component';
import { Auth2Guard } from './auth/auth2.guard';
import { ChefComponent } from './chef/chef.component';
import { LoginChefComponent } from './login-chef/login-chef.component';
import { Auth3Guard } from './auth/auth3.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    MenuComponent,
    CartComponent,
    ManagerComponent,
    LoginManagerComponent,
    CourierComponent,
    LoginCourierComponent,
    ChefComponent,
    LoginChefComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    DropDownListModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent, pathMatch: 'full' },
      { path: 'cart', component: CartComponent, pathMatch: 'full' },
      { path: 'manager', component: ManagerComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'loginmanager', component: LoginManagerComponent, pathMatch: 'full' },
      { path: 'courier', component: CourierComponent, pathMatch: 'full', canActivate: [Auth2Guard] },
      { path: 'logincourier', component: LoginCourierComponent, pathMatch: 'full' },
      { path: 'chef', component: ChefComponent, pathMatch: 'full', canActivate: [Auth3Guard] },
      { path: 'loginchef', component: LoginChefComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
