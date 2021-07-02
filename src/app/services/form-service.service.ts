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
    const token = this.getToken();
    const headers = {
      Authorization : `Bearer ${token}`
    }
    return this.httpClient.put<Vote>(`${this.url}/user/${id}`, value, {
      headers,
    });
  }

  verify_email(email : string) : Observable<Result> {
    const token = this.getToken();

    const headers = {
      Authorization : `Bearer ${token}`
    }
    return this.httpClient.get<Result>(`${this.url}/user/email/${email}`, {
      headers
    });
  }

  createUser(email : string, name : string, password : string, confirmation_password : string){
    return this.httpClient.post<any>(`${this.url}/user/register`, {email : email, name : name, password : password, confirmation_password : confirmation_password});
  }

  login(email : string, password : string) : Observable<any> {
    return this.httpClient.post<any>(`${this.url}/user/auth/login`, {email : email, password : password});
  }

  infos_nps(){
    const token = this.getToken();

    const headers = {
      Authorization : `Bearer ${token}`
    }

    return this.httpClient.get(`${this.url}/user/list/descriptions`, {
      headers
    });
  }

  getToken(){
    const token = localStorage.getItem("token");
    return token
  }

}
