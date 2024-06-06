// import React, { useState } from "react";

// function Meeting() {
//   const [allDay, setAllDay] = useState(false);
//   const handleCheckboxChange = () => {
//     setAllDay(!allDay);
//   };
//   return (
//     <form className="max-w-md mx-auto pt-[40px]">
//       <p className="my-[20px] font-[700] text-[20px]">TECHVIFY - Create Meeting Form</p>
//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="text"
//           name="floating_text"
//           id="floating_text"
//           className="block py-2.5 px-0 w-full text-[16px] font-[700] text-[#000000] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           htmlFor="floating_text"
//           className="peer-focus:font-medium absolute text-[1rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Reservation Information
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="date"
//           name="floating_text"
//           id="floating_text"
//           className="block py-2.5 px-0 w-full text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           htmlFor="floating_text"
//           className="peer-focus:font-medium absolute text-[1rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Reservation Day
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="time"
//           name="repeat_password"
//           id="floating_repeat_password"
//           className="block py-2.5 px-0 w-full text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           htmlFor="floating_repeat_password"
//           className="peer-focus:font-medium absolute text-[1rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Start at
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="time"
//           name="repeat_password"
//           id="floating_repeat_password"
//           className="block py-2.5 px-0 w-full text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           htmlFor="floating_repeat_password"
//           className="peer-focus:font-medium absolute text-[1rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Meeting Duration
//         </label>
//       </div>
//       <div className="flex items-center my-[20px]">
//           <input onChange={handleCheckboxChange} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:bg-gray-700 dark:border-gray-600"/>
//           <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All Day Reservation</label>
//       </div>
//       {allDay && (
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="date"
//             name="end_date"
//             id="end_date"
//             className="block py-2.5 px-0 w-full text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="end_time"
//             className="peer-focus:font-medium absolute text-[1rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             End Date
//           </label>
//         </div>
//       )}

//       {/* Location */}
//       <label className="flex items-center my-[20px] text-[16px] font-bold">Location</label>
//       <form className="w-[60%] flex flex-col my-[20px]">
//         <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//         <select id="branch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//           <option value="HaNoi">Ha Noi - floor 2</option>
//           <option value="DaNang">Da Nang - floor 2</option>
//           <option value="NhatBan">Japan - floor 3</option>
//           <option value="HCM">HCM - floor 2</option>
//         </select>
//       </form>


//       <button
//         type="submit"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] w-full sm:w-auto px-5 py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Meeting;


import React, { useState } from "react";
import InputField from "../components/input";
import BranchSelector from "../components/branch";

const Meeting: React.FC = () => {
  const [allDay, setAllDay] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setAllDay(!allDay);
  };

  return (
    <form className="max-w-md mx-auto pt-[40px]">
      <p className="my-[20px] font-[700] text-[20px]">TECHVIFY - Create Meeting Form</p>
      
      <InputField
        type="text"
        name="floating_text"
        id="floating_text"
        label="Reservation Information"
        required={true}
      />
      <InputField
        type="date"
        name="floating_date"
        id="floating_date"
        label="Reservation Day"
        required={true}
      />
      <InputField
        type="time"
        name="start_time"
        id="start_time"
        label="Start at"
        required={true}
      />
      <InputField
        type="time"
        name="duration"
        id="duration"
        label="Meeting Duration"
        required={true}
      />

      <div className="flex items-center my-[20px]">
        <input onChange={handleCheckboxChange} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All Day Reservation</label>
      </div>
      
      {allDay && (
        <InputField
          type="date"
          name="end_date"
          id="end_date"
          label="End Date"
          required={true}
        />
      )}

      {/* Location */}
      <label className="flex items-center my-[20px] text-[16px] font-bold">Location</label>
      {/* <div className="w-[60%] flex flex-col my-[20px]">
        <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select id="branch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="HaNoi">Ha Noi - floor 2</option>
          <option value="DaNang">Da Nang - floor 2</option>
          <option value="NhatBan">Japan - floor 3</option>
          <option value="HCM">HCM - floor 2</option>
        </select>
      </div> */}
      <BranchSelector />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Meeting;

