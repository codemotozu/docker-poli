import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../model/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersservicesService {
  private http = inject(HttpClient);
  constructor() { }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('http://localhost:5005/user')
  }
}

