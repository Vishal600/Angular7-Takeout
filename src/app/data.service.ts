
/*Service for the Menu*/

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('http://localhost:64608/api/Items/');
  }
}
