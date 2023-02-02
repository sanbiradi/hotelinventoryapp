import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,

  ]
})
export class CommentModule { }
