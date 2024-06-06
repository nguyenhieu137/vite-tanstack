import React, { useState } from "react";

interface Branch {
  name: string;
  rooms: string[];
}

const branches: Branch[] = [
  { name: "HaNoi", rooms: ["Room 1", "Room 2", "Room 3"] },
  { name: "DaNang", rooms: ["Room A", "Room B"] },
  { name: "NhatBan", rooms: ["Room X", "Room Y", "Room Z"] },
  { name: "HCM", rooms: ["Room M", "Room N"] },
];

const BranchSelector: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(e.target.value);
  };

  const selectedRooms = branches.find(branch => branch.name === selectedBranch)?.rooms || [];

  return (
    <div className="w-[60%] flex flex-col my-[20px]">
      <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a branch</label>
      <select
        id="branch"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedBranch}
        onChange={handleBranchChange}
      >
        <option value="">Select a branch</option>
        {branches.map(branch => (
          <option key={branch.name} value={branch.name}>{branch.name}</option>
        ))}
      </select>
      
      {selectedRooms.length > 0 && (
        <div className="mt-4">
          <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a room</label>
          <select
            id="room"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {selectedRooms.map((room, index) => (
              <option key={index} value={room}>{room}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default BranchSelector;
