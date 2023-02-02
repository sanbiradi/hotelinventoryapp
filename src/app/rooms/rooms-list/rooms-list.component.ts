import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { roomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy {
  ngOnChanges( changes: SimpleChanges): void {
    // console.log(changes);
  }
  ngOnInit(): void {
    // console.log('ng on init');
    console.log(this.rooms)
  }
  @Input() rooms: roomList[] | null = [];
  @Input() greet: string = '';
  @Input() price!:number;
  @Output() selectedRoom = new EventEmitter<roomList>();
  @Output() sayHello = new EventEmitter<string>();
  constructor() {}
  ngOnDestroy(): void {
    console.log("destroy called")
  }
  
  selectRoom(room: roomList) {
    this.selectedRoom.emit(room);
  
  }

  passMessage(m:string){
    this.sayHello.emit(m);
  }
}
