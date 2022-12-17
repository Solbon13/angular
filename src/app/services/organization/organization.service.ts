import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/organization';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

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
      body,
      // httpOptions
      );
  }

  update(body: any, id: string): Observable<any> {
    delete body.id
    return this.http.put(
      API_URL + `/${id}`,
      body,
      // httpOptions
      );
  }

}
