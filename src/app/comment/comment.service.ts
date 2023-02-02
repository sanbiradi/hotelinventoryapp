import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comments } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  getComments() {
    return this.http.get<comments[]>('https://jsonplaceholder.typicode.com/commentss');
  }
}
