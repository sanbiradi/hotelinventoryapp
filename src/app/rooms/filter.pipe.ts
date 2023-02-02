import { Pipe, PipeTransform } from '@angular/core';
import { roomList } from './rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(rooms: roomList[], price: number): roomList[]{
    return rooms.filter((room) => room.price > price);
  }
}
