import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http :HttpClient) { }
  
  getSessionData()
  {
    return this.http.get("http://demo3872473.mockable.io/sessions");
  }
}
