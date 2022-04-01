import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DB } from './model';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDB(): Observable<DB> {
    return this.httpClient.get("assets/db.json") as Observable<DB>
  }
}
