import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // http://localhost:8080/api/v1.0/tweets

  private tweetUrl = 'http://54.198.190.90:8080/api/v1.0/tweets';

  constructor(private http: HttpClient) { }

  register(user: User) : Observable<any> {
    return this.http.post(`${this.tweetUrl}`+'/register', user)
  }

  getUsers() : Observable<any>{
    return this.http.get<User[]>(`${this.tweetUrl}`+'/users/all')
  }

  getUser(username: string) : Observable<any> {
    return this.http.get<User>(`${this.tweetUrl}/user/search/${username}`)
  }

  updatePassword(username: string, password: string) {
    return this.http.get(`${this.tweetUrl}/${username}/forgot/${password}`);
  }

  login(username : string, password:string) : Observable<any>{
    return this.http.get(`${this.tweetUrl}/login/${username}/${password}`)
  }

  isAuthenticated(loginId : string, password:string){
    return this.http.get(`${this.tweetUrl}/login/${loginId}/${password}`)
  }
}
