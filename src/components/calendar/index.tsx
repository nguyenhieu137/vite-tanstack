import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRouter } from "@tanstack/react-router";
import "./index.scss";

interface Event {
  id: string;
  title: string;
  startRecur: Date;
  endRecur?: Date;
  color?: string;
}

interface CalendarComponentProps {
  events: Event[];
  initialView?: string;
  weekends?: boolean;
  height?: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  events,
  initialView = "dayGridMonth",
  weekends = true,
  height = "80vh",
}) => {
  const router = useRouter();

  const handleDateClick = () => {
    router.navigate({ to: "/meeting" });
  };
  const handleEventClick = () => {
    router.navigate({ to: "/meeting/:id" });
  };
  function renderEventContent(eventInfo: {
    event: { title: string; start: Date; end?: Date; backgroundColor?: string };
  }) {
    const { title, backgroundColor } = eventInfo.event;

    return (
      <div
        onClick={handleEventClick}
        className="event flex flex-col h-[100%] w-full cursor-pointer"
        style={{ backgroundColor }}
      >
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={initialView}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={height}
        weekends={weekends}
        events={events}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default CalendarComponent;
