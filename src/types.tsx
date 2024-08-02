export type CustomerType = {
  id: number;
  name: string;
};

export type BookingType = {
  id: string;
  userID: number;
  date: string;
  roomNumber: number;
};

export type RoomType = {
  number: number;
  roomType: string;
  bidet: boolean;
  bedSize: string;
  numBeds: number;
  costPerNight: number;
};
