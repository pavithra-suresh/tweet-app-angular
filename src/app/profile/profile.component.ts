import { Router, ActivatedRoute } from '@angular/router';
import { TweetService } from './../tweet.service';
import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginId : ''
  tweets: Tweet[] = [];
  noData = '';
  newTweetMessage: ''
  isAddTweet = 0;
  updateTweetMessage: ''
  isUpdateTweet = 0;

  constructor(private tweetService: TweetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginId = this.route.snapshot.params['loginId']
    this.tweetService.getTweetsofUser(this.loginId).subscribe(response => {
      console.log(response)
      this.tweets = response

      if (!this.tweets.length) {
        this.noData = "No tweets to display."
      }
    })
  }

  updateTweet(tweetId: string) {
    console.log("post comment ", tweetId);
    this.tweetService.updateTweet(tweetId, this.updateTweetMessage).subscribe(response => {
      console.log(response)
      if (response != 0) {
        window.location.reload();
      }
    })
    this.isUpdateTweet = 0
  }

  editTweet() {
    this.isUpdateTweet = 1;
  }

  postTweet() {
    console.log("post comment ", this.loginId, this.newTweetMessage);
    this.tweetService.postTweet(this.loginId, this.newTweetMessage).subscribe(response => {
      console.log(response)
      if (response != 0) {
        window.location.reload();
      }
    })
    this.isAddTweet = 0;
    this.newTweetMessage = '';
  }

  deleteTweet(tweetId: string) {
    console.log("delete comment ", tweetId);
    this.tweetService.deleteTweet(tweetId).subscribe(response => {
      if(response === true)
        window.location.reload();
    })
  }

  addTweet() {
    this.isAddTweet = 1;
  }

}
