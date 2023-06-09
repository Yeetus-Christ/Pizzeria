/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CourierRm } from '../models/courier-rm';

@Injectable({
  providedIn: 'root',
})
export class LoginCourierService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findLoginCourier
   */
  static readonly FindLoginCourierPath = '/api/LoginCourier/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginCourier$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginCourier$Plain$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CourierRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginCourierService.FindLoginCourierPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourierRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginCourier$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginCourier$Plain(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<CourierRm> {

    return this.findLoginCourier$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CourierRm>) => r.body as CourierRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginCourier()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginCourier$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CourierRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginCourierService.FindLoginCourierPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourierRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginCourier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginCourier(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<CourierRm> {

    return this.findLoginCourier$Response(params).pipe(
      map((r: StrictHttpResponse<CourierRm>) => r.body as CourierRm)
    );
  }

}
