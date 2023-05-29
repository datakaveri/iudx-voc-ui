import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  data: any;

  constructor() {}

  set_temp_data(data: any): void {
    this.data = data;
  }
  get_temp_data() {
    return this.data;
  }
}
