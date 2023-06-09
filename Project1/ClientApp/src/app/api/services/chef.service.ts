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

import { OrderRm } from '../models/order-rm';

@Injectable({
  providedIn: 'root',
})
export class ChefService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchOrdersChef
   */
  static readonly SearchOrdersChefPath = '/api/Chef/findOrders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersChef$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersChef$Plain$Response(params?: {
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ChefService.SearchOrdersChefPath, 'get');
    if (params) {
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchOrdersChef$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersChef$Plain(params?: {
    status?: string;
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersChef$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersChef()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersChef$Response(params?: {
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ChefService.SearchOrdersChefPath, 'get');
    if (params) {
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchOrdersChef$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersChef(params?: {
    status?: string;
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersChef$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * Path part for operation updateOrderChef
   */
  static readonly UpdateOrderChefPath = '/api/Chef/updateOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderChef()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderChef$Response(params?: {
    id?: number;
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChefService.UpdateOrderChefPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOrderChef$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderChef(params?: {
    id?: number;
    status?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.updateOrderChef$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
