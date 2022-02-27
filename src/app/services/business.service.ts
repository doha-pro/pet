import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../models/filters.model';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://petscare.test:8089/api/';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  getBusinesses(param?: Filters): Observable<any> {
    return this.http.get(
      AUTH_API + 'client/request/all', {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token.getToken(), 'Content-Type': 'application/json' }),
      params: {
        address: param?.address ?? '',
        open_at: param?.open_at ?? '',
        close_at: param?.close_at ?? '',
        max_price: param?.max_price ?? ''
      }
    },
    );
  }
}