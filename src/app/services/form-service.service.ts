import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  url = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) {}

  add_vote(id : string, value : Vote) : Observable<Vote>{
    return this.httpClient.put<Vote>(`${this.url}/user/${id}`, value);
  }
}
