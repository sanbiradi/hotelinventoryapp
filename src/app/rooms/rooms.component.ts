import { HttpEventType } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { rooms, roomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Hilton Hotel';
  roomsCount = 20;
  hideRooms = true;
  totalBytes = 0;
  selectedRoom!: roomList;
  priceFilter: any = new FormControl(0);

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  greetingMessage: string = 'Good morning User!';

  @ViewChild(HeaderComponent, { static: true })
  HeaderComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) HeaderChildren!: QueryList<HeaderComponent>;

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error();
  });
  ngAfterViewInit(): void {
    // console.log(this.HeaderComponent); //meta data will be display in the console
    // console.log('ng after init called');
    this.HeaderComponent.title = 'Rooms View';
    this.HeaderChildren.reset;
  }
  roomList: roomList[] = [];
  subscription!: Subscription;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  // rooms$ = this.roomService.getRooms$.pipe(
  //   catchError((err) => {
  //     console.log(err);
  //     this.error$.next(err.message);
  //     return of([]);
  //   })
  // );

  roomsCount$ = this.roomService.getRooms$.pipe(
    map((room) => {
      room.length;
    })
  );
  ngOnInit(): void {
    // console.log(this.HeaderComponent);
    // console.log('ng on init called');

    // this.stream.subscribe((data) => {
    //   console.log(data);
    // });

    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('complete'),
    //   error: (err) => console.log(err),
    // });

    // this.roomService.getPhotos().subscribe((event) => {
    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('Request has been made!');
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('Request Success!');
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       this.totalBytes += event.loaded;
    //       console.log(this.totalBytes);
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log(event.body);
    //       break;
    //     }
    //   }
    // });

    this.subscription = this.roomService.getRooms().subscribe((room) => {
      this.roomList = room;
      console.log(room);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // roomServie!:RoomsService = new RoomsService(); this is the service
  constructor(
    private roomService: RoomsService,
    private configS: ConfigService
  ) {}
  rooms: rooms = {
    totalRooms: 20,
    availableRooms: this.roomList.length,
    bookedRooms: 10,
  };

  selectRoom(room: roomList) {
    this.selectedRoom = room;
  }

  message!: string;
  displayMessage(m: string) {
    this.message = m;
  }

  addRoom() {
    let newRoom = {
      roomNumber: '106',
      roomType: 'Deluxe1',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      photos: 'demo',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 45,
    };
    // this.roomList = [...this.roomList, newRoom];
    this.roomService.addRoom(newRoom).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    let newRoom = {
      roomNumber: '3',
      roomType: 'Luxurious',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      photos: 'sandip',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 45,
    };
    this.roomService.editRoom(newRoom).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }
}
