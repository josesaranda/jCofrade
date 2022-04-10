import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { fakeDB } from './fake/db';
import { DB } from './model';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDB(): Observable<DB> {
    if (!environment.production) {
      return of(fakeDB)
    }
    return this.httpClient.get("assets/db.json") as Observable<DB>
  }
}
