import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getList(name: string): Observable<any> {
    return this.http.get(API_URL + name, { responseType: 'json' });
  }

  getOne(id: String, name: string): Observable<any> {
    return this.http.get(API_URL + name + `/${id}`, { responseType: 'json' });
  }

  create(body: any, name: string): Observable<any> {
    delete body.id
    return this.http.post(
      API_URL + name,
      body
      );
  }

  update(body: any, id: string, name: string): Observable<any> {
    delete body.id
    return this.http.put(
      API_URL + name + `/${id}`,
      body
      );
  }

  delete(id: string, name: string): Observable<any> {
    return this.http.delete(
      API_URL + name + `/${id}`
      );
  }
}
