import CalendarComponent from "../components/calendar/index";
// import { callMsGraph } from '@/services/graph';
// import { loginRequest } from '@/services/request';
// import { useMsal } from '@azure/msal-react';

interface Event {
  id: string;
  title: string;
  startRecur: Date; // Start recurrence date in ISO format
  endRecur: Date; // End recurrence date in ISO format
  // startTime: string; // Start time of the event
  // endTime: string; // End time of the event
  daysOfWeek: number[]; // Days of the week the event occurs (0=Sunday, 1=Monday, etc.)
  color: string;
}
const events: Event[] = [
  {
    id: "1",
    title: "All Day Event",
    startRecur: new Date("2024-06-01T00:00:00"),
    endRecur: new Date("2024-06-01T23:59:59"),
    // startTime: '00:00:00',
    // endTime: '23:59:59',
    daysOfWeek: [6], // Saturday
    color: "#32a852",
  },
  {
    id: "2",
    title: "Long Event",
    startRecur: new Date("2024-06-07T09:00:00"),
    endRecur: new Date("2024-06-10T17:00:00"),
    // startTime: '09:00:00',
    // endTime: '17:00:00',
    daysOfWeek: [5, 6, 0], // Friday, Saturday, Sunday
    color: "#2b20bd",
  },
  {
    id: "3",
    title: "Meeting",
    startRecur: new Date("2024-06-03T10:30:00"),
    endRecur: new Date("2024-06-10T12:30:00"),
    // startTime: '10:30:00',
    // endTime: '12:30:00',
    daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
    color: "#bf2259",
  },
  {
    id: "4",
    title: "Meeting techvify D1",
    startRecur: new Date("2024-06-08T10:30:00"),
    endRecur: new Date("2024-06-08T12:30:00"),
    // startTime: '10:30:00',
    // endTime: '12:30:00',
    daysOfWeek: [6], // Saturday
    color: "#bf2251",
  },
  // Sự kiện lặp lại hàng ngày từ 6 đến 8 tháng 6
  {
    id: "5",
    title: "Daily Meeting",
    startRecur: new Date("2024-06-06T08:30:00"),
    endRecur: new Date("2024-06-08T09:00:00"),
    // startTime: '08:30:00',
    // endTime: '09:00:00',
    daysOfWeek: [4, 5, 6], // Thursday, Friday, Saturday
    color: "#ffaa00",
  },
];

function Home() {
  return (
    <div className="home-container w-full flex justify-center">
      {/* <button onClick={RequestProfileData}>get data</button> */}
      <div className="calendar-container w-[90%] md:w-[60%]">
        <CalendarComponent events={events} />
      </div>
    </div>
  );
}

export default Home;
