import React, { useState, useEffect } from "react";

interface Room {
  id: string;
  room_name: string;
  floor: string;
  size: string;
  description: string;
}

interface Branch {
  id: string;
  branch_name: string;
  rooms: Room[];
}

const BranchSelector: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>("1"); // Default to "Ha Noi" branch (assuming its ID is "1")
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/branch")
      .then((response) => response.json())
      .then((data) => {
        setBranches(data);

        // Find the default branch (Ha Noi) and set its rooms
        const defaultBranch = data.find((branch: Branch) => branch.id === "1");
        setSelectedRooms(defaultBranch ? defaultBranch.rooms : []);
      })
      .catch((error) => console.error("Error fetching branches:", error));
  }, []);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchId = e.target.value;
    setSelectedBranch(branchId);

    const branch = branches.find((branch) => branch.id === branchId);
    setSelectedRooms(branch ? branch.rooms : []);
  };

  return (
    <div className="w-[60%] flex flex-col my-[20px]">
      <label
        htmlFor="branch"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a branch
      </label>
      <select
        id="branch"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedBranch}
        onChange={handleBranchChange}
      >
        {branches.map((branch) => (
          <option key={branch.id} value={branch.id}>
            {branch.branch_name}
          </option>
        ))}
      </select>

      {selectedRooms.length > 0 && (
        <div className="mt-4">
          <label
            htmlFor="room"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a room
          </label>
          <select
            id="room"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {selectedRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default BranchSelector;
