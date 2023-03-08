import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { POSTS } from '../fake-db';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  newPost: Post;
  loaded: boolean;

  constructor(private postService: PostService) {
    this.posts = [];
    this.newPost = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPosts();
    
  }

  getPosts(){
    // this.posts = POSTS;
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  addPost(){
    this.postService.addPost(this.newPost).subscribe((post) =>{
      console.log(post);
    })
    // console.log(this.newPost);
  }
}
