import { Component, OnInit } from '@angular/core';
import { roomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  constructor(private roomService: RoomsService) {}

  successMessage!: string;
  room: roomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };
  ngOnInit(): void {}
  addRoom(roomsform: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room Added Successfully';
      roomsform.resetForm({
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0,
      });
    });
  }
}
