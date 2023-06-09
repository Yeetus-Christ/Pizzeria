/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CartService } from './services/cart.service';
import { ChefService } from './services/chef.service';
import { CourierService } from './services/courier.service';
import { LoginChefService } from './services/login-chef.service';
import { LoginCourierService } from './services/login-courier.service';
import { LoginManagerService } from './services/login-manager.service';
import { ManagerService } from './services/manager.service';
import { MenuService } from './services/menu.service';
import { WeatherForecastService } from './services/weather-forecast.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CartService,
    ChefService,
    CourierService,
    LoginChefService,
    LoginCourierService,
    LoginManagerService,
    ManagerService,
    MenuService,
    WeatherForecastService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
