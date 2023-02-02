export interface rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface roomList {
  roomNumber?: string;
  roomType: string;
  amenities: string;
  price: number;
  photos:string
  checkinTime: Date;
  checkoutTime: Date;
  rating:number
}
