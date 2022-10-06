import { TweetService } from './../tweet.service';
import { Tweet } from './../tweet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../comment';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[] = [];
  noData = '';
  comments: Comment[] = []
  noComments: number
  filteredTweet: Tweet[] = [];
  addComment = 0;
  viewComment = 0;
  messageInComment = '';
  currentTweetId=''
  currentUser=''

  constructor(private tweetService: TweetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params['loginId']
    this.tweetService.getAllTweets().subscribe(response => {
        console.log(response)
        this.tweets = response

        if (!this.tweets.length) {
          this.noData = "No tweets to display."
        }
      })
      this.addComment = 0
  }

  updateLikes(id: string) {
    this.addComment = 1;
    console.log(id);
    this.tweetService.likeTweet(id).subscribe(response => {
      console.log(response)
      if (response != 0) {
        window.location.reload();
      }
    })
  }

  postComment(tweetId : string) {
    this.addComment = 1;
    this.viewComment = 0;
    this.currentTweetId = tweetId;
  }

  addAComment(tweetId: string) {
    console.log("post comment ", tweetId, this.currentUser, this.messageInComment);
    this.addComment = 1;
    this.viewComment = 0;
    this.tweetService.postComment(tweetId, this.currentUser, this.messageInComment).subscribe(response => {
      console.log(response)
      this.messageInComment = ''
    })
  }

  viewComments(tweetId: string) {
    this.viewComment = 1;
    this.addComment = 0;
    this.tweetService.getComments(tweetId).subscribe(data => {
      this.comments = data
      this.currentTweetId = tweetId;
      if (this.comments == null) {
        this.noComments = 1
      } else {
        this.noComments = 0
      }
    })}

}
