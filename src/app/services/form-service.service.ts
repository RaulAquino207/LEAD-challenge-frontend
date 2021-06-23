import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  url = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) {}

  add_vote(id : string, value : Vote) : Observable<Vote>{
    return this.httpClient.put<Vote>(`${this.url}/user/${id}`, value);
  }

  verify_email(email : string) : Observable<Result> {
    return this.httpClient.get<Result>(`${this.url}/user/email/${email}`);
  }

  verify_password(password : string) : Observable<Result> {
    return this.httpClient.get<Result>(`${this.url}/user/password/${password}`);
  }

  infos_nps(){
    return this.httpClient.get(`${this.url}/user/list/descriptions`);
  }

}
