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

import { ChefRm } from '../models/chef-rm';

@Injectable({
  providedIn: 'root',
})
export class LoginChefService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findLoginChef
   */
  static readonly FindLoginChefPath = '/api/LoginChef/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginChef$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginChef$Plain$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ChefRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginChefService.FindLoginChefPath, 'get');
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
        return r as StrictHttpResponse<ChefRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginChef$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginChef$Plain(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<ChefRm> {

    return this.findLoginChef$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChefRm>) => r.body as ChefRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginChef()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginChef$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ChefRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginChefService.FindLoginChefPath, 'get');
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
        return r as StrictHttpResponse<ChefRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginChef$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginChef(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<ChefRm> {

    return this.findLoginChef$Response(params).pipe(
      map((r: StrictHttpResponse<ChefRm>) => r.body as ChefRm)
    );
  }

}
