/**
 * @module Providers
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Request } from '@angular/http';
import { API_URL, HEADER_OPTIONS_FORM, HEADER_OPTIONS_JSON } from './constants';
import 'rxjs/add/operator/retry';

/**
 * ### Provider Http Request
 * 
 * Provides methods to do http requests api server.
 * 
 */
@Injectable()
export class HttpRequestsProvider {


  constructor(
    public http: Http,
  ) { }

  getRequest(
    url: string,
    auth: RequestOptions = new RequestOptions()): Promise<Response | Request> {
    // tslint:disable-next-line:no-this-assignment
    const self = this;

    return new Promise<Response | Request>((resolve, reject) => {
      self.http.get(API_URL + url, auth)
        .subscribe((response: Response) => {
          resolve(response);
        },         (error: Request) => {
          reject(error);
        });
    });
  }

  putRequest(url: string, data: any, header: string): Promise<Response | Request> {
    // tslint:disable-next-line:no-this-assignment
    const self = this;
    const headerOption = self.getHeader(header);

    return new Promise<Response | Request>((resolve, reject) => {
      self.http.put(API_URL + url, data, headerOption)
        .subscribe((response: Response) => {
          resolve(response);
        },         (error: Request) => {
          reject(error);
        });
    });
  }

  postRequest(
    url: string,
    data: any,
    header: string,
    auth: RequestOptions = null): Promise<Response | Request> {
    // tslint:disable-next-line:no-this-assignment
    const self = this;
    const headerOption: RequestOptions = (auth) ? auth : self.getHeader(header);

    return new Promise<Response | Request>((resolve, reject) => {
      self.http.post(API_URL + url, data, headerOption)
        .subscribe((response: Response) => {
          resolve(response);
        },         (error: Request) => {
          reject(error);
        });
    });
  }

  getHeader(header: string): RequestOptions {
    switch (header) {
      case 'form': {
        return HEADER_OPTIONS_FORM;
      }
      case 'json': {
        return HEADER_OPTIONS_JSON;
      }
    }
  }

}
