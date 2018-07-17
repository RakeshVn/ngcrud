import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('http://localhost:3010/api/retrieve')
      .map(res => res.json());
  }

  post(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("Hey Ramu here I'm in data.service.ts check out here me in file", data)

    // Ramu Use Your NodeJs API here
    // http://localhost:3000
    return this.http.post('', data, { headers: headers })
      .map(res => res.json());
  }
}
