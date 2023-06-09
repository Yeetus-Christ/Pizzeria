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
export class CourierService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchOrdersCourier
   */
  static readonly SearchOrdersCourierPath = '/api/Courier/findOrders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersCourier$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersCourier$Plain$Response(params?: {
    courier?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CourierService.SearchOrdersCourierPath, 'get');
    if (params) {
      rb.query('courier', params.courier, {});
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
   * To access the full response (for headers, for example), `searchOrdersCourier$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersCourier$Plain(params?: {
    courier?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersCourier$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersCourier()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersCourier$Response(params?: {
    courier?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CourierService.SearchOrdersCourierPath, 'get');
    if (params) {
      rb.query('courier', params.courier, {});
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
   * To access the full response (for headers, for example), `searchOrdersCourier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersCourier(params?: {
    courier?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersCourier$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * Path part for operation updateOrderCourier
   */
  static readonly UpdateOrderCourierPath = '/api/Courier/updateOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderCourier()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderCourier$Response(params?: {
    id?: number;
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CourierService.UpdateOrderCourierPath, 'put');
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
   * To access the full response (for headers, for example), `updateOrderCourier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderCourier(params?: {
    id?: number;
    status?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.updateOrderCourier$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
