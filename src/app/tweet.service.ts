import { Tweet } from './tweet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  private tweetUrl = 'http://54.198.190.90:8080/api/v1.0/tweets';
  // http://localhost:8080/api/v1.0/tweets

  getAllTweets() {
    return this.http.get<Tweet[]>(`${this.tweetUrl}`+'/all')
  }

  postTweet(username: string, tweetMessage: string) {
    return this.http.post(`${this.tweetUrl}/addTweet/${username}`, tweetMessage);
  }

  getTweetsofUser(username: string) {
    return this.http.get<Tweet[]>(`${this.tweetUrl}/${username}`)
  }

  deleteTweet(id: string) {
    return this.http.delete(`${this.tweetUrl}/delete/${id}`)
  }

  updateTweet(id: string, tweetMessage: string) {
    return this.http.patch(`${this.tweetUrl}/update/${id}`, tweetMessage)
  }

  likeTweet(id: string) {
    return this.http.get(`${this.tweetUrl}/like/${id}`)
  }

  postComment(tweetId: string, username: string, tweetMessage: string) {
    return this.http.post(`${this.tweetUrl}/${username}/comment/${tweetId}`, tweetMessage)
  }

  getTweet(tweetId: string) {
    return this.http.get(`${this.tweetUrl}/getTweet/${tweetId}`)
  }

  getComments(tweetId: string) {
    return this.http.get<Comment[]>(`${this.tweetUrl}/getComments/${tweetId}`)
  }
}
