import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as fromModels from '../models';

@Injectable({ providedIn: 'root' })
export class SeatsService {
  constructor(private http: HttpClient) {}

  getSeats(room: 'A' | 'C' | 'D' | 'R'): Observable<fromModels.ISeat[]> {
    return this.http
      .get<fromModels.ISeat[]>(`http://localhost:4200/assets/data/${room}.json`)
      .pipe(delay(500));
  }
}
