import { Injectable } from '@angular/core';
import { ColorEntity } from '../Entity/colorEntity';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../component/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getColorList(): ColorEntity[] {
    return [
      { code: 'c0', name: 'Black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' },
    ];
  }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }
}
