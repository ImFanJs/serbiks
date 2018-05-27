import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesService {
  servicesUrl = 'http://localhost:3000/services/';

  constructor(private http: HttpClient) { }

  getServicesList() {
    return this.http.get(this.servicesUrl);
  }

  getService(id) {
    return this.http.get(this.servicesUrl + id);
  }

}
