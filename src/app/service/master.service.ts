import { Injectable } from '@angular/core';
import { ColorEntity } from '../Entity/colorEntity';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  getColorList(): ColorEntity[] {
    return [
      { code: 'c0', name: 'Black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' },
    ];
  }
}
