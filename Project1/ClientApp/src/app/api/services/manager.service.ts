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
import { MenuItemRm } from '../models/menu-item-rm';
import { OrderRm } from '../models/order-rm';

@Injectable({
  providedIn: 'root',
})
export class ManagerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchOrdersManager
   */
  static readonly SearchOrdersManagerPath = '/api/Manager/findOrders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersManager$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersManager$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchOrdersManagerPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `searchOrdersManager$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersManager$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersManager$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOrdersManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersManager$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchOrdersManagerPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `searchOrdersManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOrdersManager(params?: {
    context?: HttpContext
  }
): Observable<Array<OrderRm>> {

    return this.searchOrdersManager$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderRm>>) => r.body as Array<OrderRm>)
    );
  }

  /**
   * Path part for operation searchMenuItemsManager
   */
  static readonly SearchMenuItemsManagerPath = '/api/Manager/findMenuItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchMenuItemsManager$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenuItemsManager$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchMenuItemsManagerPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchMenuItemsManager$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenuItemsManager$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchMenuItemsManager$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchMenuItemsManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenuItemsManager$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchMenuItemsManagerPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchMenuItemsManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenuItemsManager(params?: {
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchMenuItemsManager$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * Path part for operation searchCouriersManager
   */
  static readonly SearchCouriersManagerPath = '/api/Manager/findCouriers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchCouriersManager$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCouriersManager$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CourierRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchCouriersManagerPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CourierRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchCouriersManager$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCouriersManager$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<CourierRm>> {

    return this.searchCouriersManager$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CourierRm>>) => r.body as Array<CourierRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchCouriersManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCouriersManager$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CourierRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.SearchCouriersManagerPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CourierRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchCouriersManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCouriersManager(params?: {
    context?: HttpContext
  }
): Observable<Array<CourierRm>> {

    return this.searchCouriersManager$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CourierRm>>) => r.body as Array<CourierRm>)
    );
  }

  /**
   * Path part for operation updateMenuItemManager
   */
  static readonly UpdateMenuItemManagerPath = '/api/Manager/updateMenuItem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateMenuItemManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateMenuItemManager$Response(params?: {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.UpdateMenuItemManagerPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('name', params.name, {});
      rb.query('description', params.description, {});
      rb.query('price', params.price, {});
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
   * To access the full response (for headers, for example), `updateMenuItemManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateMenuItemManager(params?: {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.updateMenuItemManager$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateOrderManager
   */
  static readonly UpdateOrderManagerPath = '/api/Manager/updateOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderManager$Response(params?: {
    id?: number;
    status?: string;
    courier?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.UpdateOrderManagerPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('status', params.status, {});
      rb.query('courier', params.courier, {});
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
   * To access the full response (for headers, for example), `updateOrderManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderManager(params?: {
    id?: number;
    status?: string;
    courier?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.updateOrderManager$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getOrderItemsManager
   */
  static readonly GetOrderItemsManagerPath = '/api/Manager/getOrderItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderItemsManager$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsManager$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.GetOrderItemsManagerPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderItemsManager$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsManager$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.getOrderItemsManager$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderItemsManager()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsManager$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, ManagerService.GetOrderItemsManagerPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderItemsManager$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsManager(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.getOrderItemsManager$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

}
