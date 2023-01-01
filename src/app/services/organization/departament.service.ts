import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/departament';


@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' });
  }

  getOne(id: String): Observable<any> {
    return this.http.get(API_URL + `/${id}`, { responseType: 'json' });
  }

  create(body: any): Observable<any> {
    delete body.id
    return this.http.post(
      API_URL,
      body
      );
  }

  update(body: any, id: string): Observable<any> {
    delete body.id
    return this.http.put(
      API_URL + `/${id}`,
      body
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(
      API_URL + `/${id}`
      );
  }

}
