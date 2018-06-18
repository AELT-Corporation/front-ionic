import { Headers, RequestOptions } from '@angular/http';


const headerForm: Headers = new Headers(
  { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
);
const headerJson: Headers = new Headers(
  { 'Content-Type': 'application/json' },
);

export const API_URL = 'http://localhost:8080/api-aelt/';

export const API_SUB_URL = {
  URL_LOGIN: 'user/login',

  URL_USER: 'user/',

};

/**
 * Header options form.
 */
export const HEADER_OPTIONS_FORM: RequestOptions = new RequestOptions({ headers: headerForm });

/**
 * Header Options json.
 */
export const HEADER_OPTIONS_JSON: RequestOptions = new RequestOptions({ headers: headerJson });
