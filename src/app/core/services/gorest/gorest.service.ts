import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../consts/api';
import { Comments } from '../../models/comments';

@Injectable({
  providedIn: 'root',
})
export class GorestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', //Validação de token de autenticação
      Authorization: 'Bearer cb68727b4607c5bb48719a6eb4a49ffba87d664361e32aabb703841a58e0fe53',
    }),
  };

  constructor(private http: HttpClient) {}

  postUsers(data: Users): Observable<Users[]> {
    return this.http.post<Users[]>(`${API.URL_API.USERS}`, data, this.httpOptions);
  }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${API.URL_API.COMMENTS}`);
  }
}
