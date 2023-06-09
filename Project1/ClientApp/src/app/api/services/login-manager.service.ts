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

import { ManagerRm } from '../models/manager-rm';

@Injectable({
  providedIn: 'root',
})
export class LoginManagerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findLoginManager
   */
  static readonly FindLoginManagerPath = '/api/LoginManager/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginManager$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginManager$Plain$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ManagerRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginManagerService.FindLoginManagerPath, 'get');
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
        return r as StrictHttpResponse<ManagerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginManager$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginManager$Plain(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<ManagerRm> {

    return this.findLoginManager$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ManagerRm>) => r.body as ManagerRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLoginManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginManager$Response(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ManagerRm>> {

    const rb = new RequestBuilder(this.rootUrl, LoginManagerService.FindLoginManagerPath, 'get');
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
        return r as StrictHttpResponse<ManagerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findLoginManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLoginManager(params?: {
    name?: string;
    password?: string;
    context?: HttpContext
  }
): Observable<ManagerRm> {

    return this.findLoginManager$Response(params).pipe(
      map((r: StrictHttpResponse<ManagerRm>) => r.body as ManagerRm)
    );
  }

}
