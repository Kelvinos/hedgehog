import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = './assets/smartphone.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getSmartPhone() {
    return this.httpClient.get(localUrl);
  }
}
