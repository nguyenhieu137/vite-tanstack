export interface Room {
  room_img: string;
  id: string;
  room_name: string;
  floor: string;
  size: string;
  description: string;
}

export interface Branch {
  id: string;
  branch_name: string;
  rooms: Room[];
  color: string;
}
