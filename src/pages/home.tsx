import CalendarComponent from "../components/calendar/index";
import { useBookings } from "../api/booking/hook";
import { Booking, Event } from "../api/booking/type";

function convertBookingToEvent(booking: Booking): Event {
  const startRecur = new Date(`${booking.date_start}T${booking.time_start}`);
  const endRecur = new Date(`${booking.date_end}T${booking.time_end}`);

  return {
    id: booking.id,
    title: booking.event_name,
    startRecur,
    endRecur,
    color: booking.color,
    timeStart: booking.time_start,
    timeEnd: booking.time_end,
  };
}

function Home() {
  const { data: bookings = [], isLoading, isError, error } = useBookings();
  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  const events: Event[] = bookings.map(convertBookingToEvent);
  return (
    <div className="home-container w-full flex justify-center">
      <div className="calendar-container w-[90%] md:w-[60%]">
        <CalendarComponent events={events} />
      </div>
    </div>
  );
}

export default Home;
