import React, { useState } from "react";
import InputField from "../components/input";
import BranchSelector from "../components/branch";
import RoomInfo from "../components/room";
import axios from "axios";

const Meeting: React.FC = () => {
  const [allDay, setAllDay] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    reservationInfo: "",
    reservationDay: "",
    startTime: "",
    endTime: "",
    endDate: "",
  });
  const [selectedRoom, setSelectedRoom] = useState<{
    roomName: string;
    description: string;
    roomImage: string;
    roomID?: string;
    branchID?: string;
    branchColor?: string;
  }>({
    roomName: "",
    description: "",
    roomImage: "",
  });
  const handleCheckboxChange = () => {
    setAllDay(!allDay);
  };

  // Validate không thể chọn ngày trong quá khứ của cả startDate và endDate
  //const [error, setError] = useState<string | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "reservationDay" || name === "endDate") {
      // Lấy ngày hiện tại
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to start of the day for accurate comparison

      // Lấy ngày đặt chỗ
      const selectedDate = new Date(value);
      selectedDate.setHours(0, 0, 0, 0); // Set to start of the day for accurate comparison

      // Kiểm tra ngày đặt chỗ có ở quá khứ không
      if (selectedDate < today) {
        //setError("Selected date cannot be in the past.");
        alert("Selected date cannot be in the past.");
        setFormData((prev) => ({ ...prev, [name]: "" })); // Reset the input value
      } else {
        //setError(null);
      }
    }

    if (name === "startTime" || name === "endTime") {
      if (!formData.reservationDay) {
        //setError("Please select a date first.");
        alert("Please select a date first.");
        setFormData((prev) => ({ ...prev, [name]: "" })); // Reset the input value
        return;
      }

      // Lấy thời gian bắt đầu và kết thúc
      const startTime = new Date(
        `${formData.reservationDay}T${formData.startTime}`,
      );
      const endTime = new Date(
        `${formData.reservationDay}T${formData.endTime}`,
      );

      // Tính thời lượng của cuộc họp
      const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60); // Thời lượng tính theo phút

      // Kiểm tra thời lượng của cuộc họp
      if (duration > 60) {
        //setError("Meeting duration cannot exceed 1 hour.");
        alert("Meeting duration cannot exceed 1 hour.");
        setFormData((prev) => ({ ...prev, [name]: "" })); // Reset the input value
      } else {
        //setError(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lấy thời gian bắt đầu
    const startTime = new Date(
      `${formData.reservationDay}T${formData.startTime}`,
    );
    const endTime = new Date(`${formData.reservationDay}T${formData.endTime}`);

    const newEvent = {
      id: Date.now().toString(), // Tạo ID tạm thời, có thể thay đổi dựa trên yêu cầu của API
      roomID: selectedRoom.roomID || "", // Sử dụng roomID của phòng đã chọn
      branchID: selectedRoom.branchID || "", // Sử dụng branchID của phòng đã chọn
      event_name: formData.reservationInfo,
      time_start: startTime.toLocaleTimeString("en-US", {
        hour12: false, // Sử dụng định dạng 24 giờ
        hour: "2-digit",
        minute: "2-digit",
      }),
      time_end: endTime.toLocaleTimeString("en-US", {
        hour12: false, // Sử dụng định dạng 24 giờ
        hour: "2-digit",
        minute: "2-digit",
      }),
      date_start: formData.reservationDay,
      date_end: formData.endDate || formData.reservationDay,
      color: selectedRoom.branchColor,
    };

    try {
      await axios.post("http://localhost:3000/booking", newEvent);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Failed to create event", error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="form-container w-full flex">
      <div className="form-wrapper w-[100%] flex flex-col items-center ">
        <div className="flex-col mt-[40px] items-center md:items-start flex md:flex-row 2xl:w-[60%] xl:w-[80%] w-[100%]">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[50%] md:mx-[16px]"
          >
            <p className="font-[700] text-[20px]">
              TECHVIFY - Create Meeting Form
            </p>

            <InputField
              type="text"
              name="reservationInfo"
              id="reservationInfo"
              label="Reservation Information"
              required={true}
              value={formData.reservationInfo}
              onChange={handleInputChange}
            />
            <InputField
              type="date"
              name="reservationDay"
              id="reservationDay"
              label="Reservation Day"
              required={true}
              value={formData.reservationDay}
              onChange={handleInputChange}
            />
            <InputField
              type="time"
              name="startTime"
              id="startTime"
              label="Start at"
              required={true}
              value={formData.startTime}
              onChange={handleInputChange}
            />
            <InputField
              type="time"
              name="endTime"
              id="endTime"
              label="End at"
              required={true}
              value={formData.endTime}
              onChange={handleInputChange}
            />

            <div className="flex items-center my-[20px]">
              <input
                onChange={handleCheckboxChange}
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All Day Reservation
              </label>
            </div>

            {allDay && (
              <InputField
                type="date"
                name="endDate"
                id="endDate"
                label="End Date"
                required={true}
                value={formData.endDate}
                onChange={handleInputChange}
              />
            )}

            {/* Location */}
            <label className="flex items-center my-[20px] text-[16px] font-bold">
              Location
            </label>

            <BranchSelector onRoomSelect={setSelectedRoom} />
            <button
              type="submit"
              className="text-white hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>

          <RoomInfo
            roomName={selectedRoom.roomName}
            description={selectedRoom.description}
            roomImage={selectedRoom.roomImage}
          ></RoomInfo>
        </div>

        <button
          type="submit"
          className="text-white my-[40px] block md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] w-[90%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Meeting;
