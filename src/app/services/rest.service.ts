import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  API: any;

  constructor(public http: HttpClient) { }

  get(resourcePath: string, pathParam: string, data: any = null) {
    let url;
    if (pathParam) {
      url = this.getURL(resourcePath + '/' + pathParam, data);
    }
    else {
      url = this.getURL(resourcePath, data);
    }
    const options = this.getHeader();
    return this.http.get<HttpResponse<any>>(url, options).pipe(
      map(this.extractData));
  }

  getAll(resourcePath: string) {
    const url = this.getURL(resourcePath);
    const options = this.getHeader();
    return this.http.get<HttpResponse<any>>(url, options).pipe(
      map(this.extractData));
  }

  post(resourcePath: string, data: any) {
    const url = this.getURL(resourcePath, data);
    const options = this.getHeader();
    return this.http.post<HttpResponse<any>>(url, data, options).pipe(
      map(this.extractData));
  }

  put(resourcePath: string, pathParam: string, data: Object) {
    let url;
    if (pathParam) {
      url = this.getURL(resourcePath + '/' + pathParam, data);
    }
    else {
      url = this.getURL(resourcePath, data);
    }
    const options = this.getHeader();
    return this.http.put<HttpResponse<any>>(url, data, options).pipe(
      map(this.extractData));
  }

  patch(resourcePath: string, pathParam: string, data: Object) {
    const url = this.getURL(resourcePath + '/' + pathParam, data);
    const options = this.getHeader();
    return this.http.patch<HttpResponse<any>>(url, data, options).pipe(
      map(this.extractData));
  }

  delete(resourcePath: string, pathParam: string, data: any = null) {
    let url;
    if (pathParam) {
      url = this.getURL(resourcePath + '/' + pathParam, data);
    }
    else {
      url = this.getURL(resourcePath, data);
    }
    const options = this.getHeader();
    return this.http.delete<HttpResponse<any>>(url, options).pipe(
      map(this.extractData));
  }

  getExternal(resourcepath: string) {
    return this
      .http
      .get(resourcepath, { responseType: 'json' });
  }

  postExternalForFile(resourcepath: string, data: any) {
    return this
      .http
      .post(resourcepath, data, { responseType: 'arraybuffer' });
  }

  getHeader(credential: string | null = null) {
    if (!credential) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          //'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          //'Authorization': 'Basic ' + btoa(credential)
        })
      };
    }
  }

  getAuthHeader(token: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
  }

  getURL(path: string, data: any = null) {
    // if (path.includes('http://') || path.includes('https://')) {
    //   return path;
    // }
    // else if (path.includes('layout')) {
    //   return API.layout.rootURL + path;
    // } else if (path.includes('home')) {
    //   return API.local.rootURL + path;
    // } else if (path.includes('auth')) {
    //   return API.auth.rootURL + path;
    // } else {
    //   return path;
    // }
    return 'url'
  }

  extractData(res: HttpResponse<any>) {
    const body = res;
    return body || {};
  }

  auth(username: string, password: string, terminateClientFlag: boolean = false) {
    const url = this.getURL(this.API.auth.authenticate);
    const options = this.getHeader(username + ':' + password);

    //const data = {access_token: MASTER_KEY};
    return this.http.post<HttpResponse<any>>(url, {
      username, password,
      terminateClientFlag: terminateClientFlag,
      clienttype: 'html'
    }, options).pipe(
      map(this.extractData));
  }

  verifyToken() {
    const url = this.getURL(this.API.main.auth);
    const options = this.getHeader();

    return this.http.get<HttpResponse<any>>(url, options).pipe(
      map(this.extractData));
  }

  getHttpClient() {
    return this.http;
  }

  uploadFile(resourcePath: string, data: FormData) {
    const url = this.getURL(resourcePath, data);
    const options = {}
    return this.http.post<HttpResponse<any>>(url, data, options).pipe(
      map(this.extractData));
  }
}
