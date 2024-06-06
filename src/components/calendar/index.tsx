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
  daysOfWeek: number[];
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
    const handleEventClick= () => {
      router.navigate({ to: "/meeting/:id" });
    };
    function renderEventContent(eventInfo: {
      event: { title: string; start: Date; end?: Date; backgroundColor?: string };
      }) {
        const { title, backgroundColor } = eventInfo.event;
    //const { title, start, end, backgroundColor } = eventInfo.event;
    // const startDate = new Date(start).toLocaleDateString();
    // const startTime = new Date(start).toLocaleTimeString(undefined, {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    // let displayEndTime = "";
    // let displayEndDate = "";

    // if (end) {
    //   const endDate = new Date(end).toLocaleDateString();
    //   const endTime = new Date(end).toLocaleTimeString(undefined, {
    //     hour: '2-digit',
    //     minute: '2-digit',
    //   });

    //   if (startDate === endDate) {
    //     displayEndTime = endTime;
    //   } else {
    //     displayEndDate = endDate;
    //     displayEndTime = endTime;
    //   }
    // }

    // const duration = end
    //   ? `${Math.ceil((new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60))} hours`
    //   : "";

    return (
      <div
        onClick={handleEventClick}
        className="event flex flex-col h-[100%] w-full cursor-pointer"
        style={{ backgroundColor }}
      >
        {/* <span>{startDate} {startTime}</span>
        {displayEndDate && <span>{displayEndDate} {displayEndTime}</span>}
        {!displayEndDate && displayEndTime && <span>{displayEndTime}</span>}
        {duration && <span>{duration}</span>} */}
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
