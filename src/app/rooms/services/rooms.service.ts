import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from '../../AppConfig/appconfig.service';
import { roomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList = [
    {
      roomNumber: 101,
      roomType: 'Deluxe1',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      checkIn: new Date('11-nov-2023'),
      checkOut: new Date('12-nov-2023'),
    },
    {
      roomNumber: 102,
      roomType: 'Deluxe2',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      checkIn: new Date('11-nov-2023'),
      checkOut: new Date('12-nov-2023'),
    },
    {
      roomNumber: 103,
      roomType: 'Deluxe3',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      checkIn: new Date('11-nov-2023'),
      checkOut: new Date('12-nov-2023'),
    },
    {
      roomNumber: 104,
      roomType: 'Deluxe4',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      checkIn: new Date('11-nov-2023'),
      checkOut: new Date('12-nov-2023'),
    },
    {
      roomNumber: 105,
      roomType: 'Deluxe5',
      amenities: 'TV, AC, Wifi',
      price: 1030,
      checkIn: new Date('11-nov-2023'),
      checkOut: new Date('12-nov-2023'),
    },
  ];
  headers = new HttpHeaders({ token: '123456789wewrr' });
  getRooms$ = this.http
    .get<roomList[]>('/api/Rooms', {
      headers: this.headers,
    })
    .pipe(shareReplay(1));
  //last one call only catching the api calls to improve performance it will avoid the repeatation of api calls
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('rooms services called!', this.config.apiEndpoint);
  }
  getRooms() {
    return this.http.get<roomList[]>('/api/Rooms');
  }
  addRoom(room: roomList) {
    return this.http.post<roomList[]>('/api/Rooms', room);
  }
  editRoom(room: roomList) {
    return this.http.put<roomList[]>(`/api/Rooms/${room.roomNumber}`, room);
  }
  delete(id: string) {
    return this.http.delete<roomList[]>(`/api/Rooms/${id}`);
  }

  // getPhotos() {
  //   const request = new HttpRequest(
  //     'GET',
  //     'https://jsonplaceholder.typicode.com/photos',
  //     {
  //       reportProgress: true,
  //     }
  //   );
  //   return this.http.request(request);
  // }
}
