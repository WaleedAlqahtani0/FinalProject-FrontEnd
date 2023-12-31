import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  readonly authApiUrl = "http://localhost:8111/carRental/auth"
  public isloggedIn = localStorage.getItem('isLoggedIn') === 'true';
  constructor(private http: HttpClient) {}

  isAuthenticatied(): boolean {
    const token: string | null = localStorage.getItem("Token")
    return token!==null
  }
  authenticate(): Observable<User>{
    const storedToken: string|null = localStorage.getItem("Token")
    if(storedToken === null){
      throw null;
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer  ${storedToken}`
      })
    }
    return this.http.get<User>(`${this.authApiUrl}/verify`, options)
  }


  signUp(user: User): Observable<User>{
    return this.http.post<User>(`${this.authApiUrl}/signup`, user)
  }


  login(username: string, password: string): Observable<any>{
    const body = {username, password}
    return this.http.post<any>(`${this.authApiUrl}/signin`, body)
  }
  logout(){
    this.isloggedIn = false

    localStorage.removeItem("Token")
    localStorage.removeItem("currentUser")
  }
}
