import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { comments } from '../comment';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<comments[]> {
  constructor(private commentService:CommentService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): comments[] | Observable<comments[]> | Promise<comments[]> {
      return this.commentService.getComments();
  }

  
}
