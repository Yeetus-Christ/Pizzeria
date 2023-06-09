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

import { MenuItemRm } from '../models/menu-item-rm';
import { OrderMenuItemRm } from '../models/order-menu-item-rm';
import { OrderRm } from '../models/order-rm';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  public cartId = 0;

  /**
   * Path part for operation getOrderItemsCart
   */
  static readonly GetOrderItemsCartPath = '/Cart/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderItemsCart$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsCart$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.GetOrderItemsCartPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `getOrderItemsCart$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsCart$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.getOrderItemsCart$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderItemsCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsCart$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.GetOrderItemsCartPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `getOrderItemsCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderItemsCart(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.getOrderItemsCart$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * Path part for operation getNumbersOfItemsCart
   */
  static readonly GetNumbersOfItemsCartPath = '/Cart/getnumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNumbersOfItemsCart$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumbersOfItemsCart$Plain$Response(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderMenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.GetNumbersOfItemsCartPath, 'get');
    if (params) {
      rb.query('orderId', params.orderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderMenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getNumbersOfItemsCart$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumbersOfItemsCart$Plain(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<Array<OrderMenuItemRm>> {

    return this.getNumbersOfItemsCart$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderMenuItemRm>>) => r.body as Array<OrderMenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNumbersOfItemsCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumbersOfItemsCart$Response(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderMenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.GetNumbersOfItemsCartPath, 'get');
    if (params) {
      rb.query('orderId', params.orderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderMenuItemRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getNumbersOfItemsCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumbersOfItemsCart(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<Array<OrderMenuItemRm>> {

    return this.getNumbersOfItemsCart$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderMenuItemRm>>) => r.body as Array<OrderMenuItemRm>)
    );
  }

  /**
   * Path part for operation updateOrderCart
   */
  static readonly UpdateOrderCartPath = '/Cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderCart$Response(params?: {
    id?: number;
    clientName?: string;
    email?: string;
    adress?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.UpdateOrderCartPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('clientName', params.clientName, {});
      rb.query('email', params.email, {});
      rb.query('adress', params.adress, {});
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
   * To access the full response (for headers, for example), `updateOrderCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderCart(params?: {
    id?: number;
    clientName?: string;
    email?: string;
    adress?: string;
    status?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.updateOrderCart$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelOrderCart
   */
  static readonly CancelOrderCartPath = '/Cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelOrderCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelOrderCart$Response(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.CancelOrderCartPath, 'delete');
    if (params) {
      rb.query('orderId', params.orderId, {});
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
   * To access the full response (for headers, for example), `cancelOrderCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelOrderCart(params?: {
    orderId?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.cancelOrderCart$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findOrderCart
   */
  static readonly FindOrderCartPath = '/Cart/{id}/findOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOrderCart$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderCart$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrderRm>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.FindOrderCartPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findOrderCart$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderCart$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<OrderRm> {

    return this.findOrderCart$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrderRm>) => r.body as OrderRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOrderCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderCart$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrderRm>> {

    const rb = new RequestBuilder(this.rootUrl, CartService.FindOrderCartPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findOrderCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderCart(params: {
    id: number;
    context?: HttpContext
  }
): Observable<OrderRm> {

    return this.findOrderCart$Response(params).pipe(
      map((r: StrictHttpResponse<OrderRm>) => r.body as OrderRm)
    );
  }

}
