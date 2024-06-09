export interface Booking {
  id: string;
  roomID: string;
  branchID: string;
  event_name: string;
  time_start: string;
  time_end: string;
  date_start: string;
  date_end: string;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  startRecur: Date;
  endRecur: Date;
  color: string;
  timeStart: string;
  timeEnd: string;
}
