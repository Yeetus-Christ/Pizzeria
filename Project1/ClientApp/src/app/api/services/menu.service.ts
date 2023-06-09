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
import { OrderRm } from '../models/order-rm';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchMenu
   */
  static readonly SearchMenuPath = '/Menu/findMenuItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchMenu$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenu$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.SearchMenuPath, 'get');
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
   * To access the full response (for headers, for example), `searchMenu$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenu$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchMenu$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenu$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.SearchMenuPath, 'get');
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
   * To access the full response (for headers, for example), `searchMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchMenu(params?: {
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchMenu$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * Path part for operation searchByTypeMenu
   */
  static readonly SearchByTypeMenuPath = '/Menu/{type}/findMenuItemsByType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchByTypeMenu$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchByTypeMenu$Plain$Response(params: {
    type: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.SearchByTypeMenuPath, 'get');
    if (params) {
      rb.path('type', params.type, {});
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
   * To access the full response (for headers, for example), `searchByTypeMenu$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchByTypeMenu$Plain(params: {
    type: string;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchByTypeMenu$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchByTypeMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchByTypeMenu$Response(params: {
    type: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MenuItemRm>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.SearchByTypeMenuPath, 'get');
    if (params) {
      rb.path('type', params.type, {});
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
   * To access the full response (for headers, for example), `searchByTypeMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchByTypeMenu(params: {
    type: string;
    context?: HttpContext
  }
): Observable<Array<MenuItemRm>> {

    return this.searchByTypeMenu$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MenuItemRm>>) => r.body as Array<MenuItemRm>)
    );
  }

  /**
   * Path part for operation createOrderMenu
   */
  static readonly CreateOrderMenuPath = '/Menu/createOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrderMenu$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  createOrderMenu$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.CreateOrderMenuPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOrderMenu$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createOrderMenu$Plain(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.createOrderMenu$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrderMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  createOrderMenu$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.CreateOrderMenuPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOrderMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createOrderMenu(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.createOrderMenu$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findMenu
   */
  static readonly FindMenuPath = '/Menu/{id}/findOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findMenu$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMenu$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrderRm>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.FindMenuPath, 'get');
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
   * To access the full response (for headers, for example), `findMenu$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMenu$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<OrderRm> {

    return this.findMenu$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrderRm>) => r.body as OrderRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMenu$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrderRm>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.FindMenuPath, 'get');
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
   * To access the full response (for headers, for example), `findMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findMenu(params: {
    id: number;
    context?: HttpContext
  }
): Observable<OrderRm> {

    return this.findMenu$Response(params).pipe(
      map((r: StrictHttpResponse<OrderRm>) => r.body as OrderRm)
    );
  }

  /**
   * Path part for operation addItemToOrderMenu
   */
  static readonly AddItemToOrderMenuPath = '/Menu/addItemToOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItemToOrderMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  addItemToOrderMenu$Response(params?: {
    OrderId?: number;
    MenuItemId?: number;
    number?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.AddItemToOrderMenuPath, 'post');
    if (params) {
      rb.query('OrderId', params.OrderId, {});
      rb.query('MenuItemId', params.MenuItemId, {});
      rb.query('number', params.number, {});
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
   * To access the full response (for headers, for example), `addItemToOrderMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addItemToOrderMenu(params?: {
    OrderId?: number;
    MenuItemId?: number;
    number?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.addItemToOrderMenu$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
