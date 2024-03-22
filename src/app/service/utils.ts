import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  apiUrl = 'https://anapioficeandfire.com/api/books';
  constructor(private http: HttpClient) {}

  callGet(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
