import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface RoomInfoProps {
  roomName: string;
  description: string;
  roomImage: string;
}

const RoomInfo: React.FC<RoomInfoProps> = ({
  roomName,
  description,
  roomImage,
}) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <div className="room-info w-[90%] md:w-[50%] h-[100%] mx-[16px] bg-[#f5f5f5] rounded-[0.5rem] md:rounded-[20px]">
      <img
        src={roomImage}
        alt=""
        className="rounded-tl-[0.5rem] rounded-tr-[0.5rem] md:rounded-tl-[20px] md:rounded-tr-[20px] object-cover w-full h-[50%] hidden md:block"
      />
      <Accordion
        className="px-[10px]"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          className="font-quicksand border-0"
          onClick={() => handleOpen(1)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {roomName}
        </AccordionHeader>
        <AccordionBody className="font-quicksand font-bold whitespace-pre-line h-[200px] overflow-y-scroll">
          {description}
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default RoomInfo;
