import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comments } from './comment';

import { CommentService } from './comment.service';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  constructor(private commentService: CommentService,private activatedRoute:ActivatedRoute) {}
  comments$= this.commentService.getComments();
    // comments$ = this.activatedRoute.data.pipe(pluck('comments'));
    // comments$:comments[]= [];
  ngOnInit() {
    // this.activatedRoute.data.subscribe((data)=>(this.comments$=data['comment']))
  }
}
