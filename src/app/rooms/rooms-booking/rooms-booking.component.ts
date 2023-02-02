import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;

  // id$ = this.router.params.pipe(map((params)=>params['id']))
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));



  ngOnInit() {
    // this.id = this.router.snapshot.params['id'];
    // this.router.params.subscribe((param) => {
    //   this.id = param['id']
    // });//we should not subscribe it cause memory leakage of observable
   
  }

  constructor(private router: ActivatedRoute) {}
}
