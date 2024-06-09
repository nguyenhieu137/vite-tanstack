import React, { useState, useEffect } from "react";
import { useBranches } from "../../api/branch/hook";

interface BranchSelectorProps {
  onRoomSelect: (room: {
    roomName: string;
    description: string;
    roomImage: string;
    roomID: string;
    branchID: string;
    branchColor: string;
  }) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({ onRoomSelect }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const { data: branches = [], isLoading, isError, error } = useBranches();

  useEffect(() => {
    if (branches.length > 0) {
      const defaultBranch = branches[0];
      setSelectedBranch(defaultBranch.id);

      if (defaultBranch.rooms.length > 0) {
        const defaultRoom = defaultBranch.rooms[0];
        setSelectedRoom(defaultRoom.id);
        onRoomSelect({
          roomName: defaultRoom.room_name,
          description: defaultRoom.description,
          roomImage: defaultRoom.room_img,
          roomID: defaultRoom.id,
          branchID: defaultBranch.id,
          branchColor: defaultBranch.color,
        });
      }
    }
    console.log(branches);
  }, [branches, onRoomSelect]);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchId = e.target.value;
    setSelectedBranch(branchId);

    const branch = branches?.find((branch) => branch.id === branchId);
    if (branch) {
      const defaultRoom = branch.rooms[0];
      setSelectedRoom(defaultRoom.id);
      onRoomSelect({
        roomName: defaultRoom.room_name,
        description: defaultRoom.description,
        roomImage: defaultRoom.room_img,
        roomID: defaultRoom.id,
        branchID: branchId,
        branchColor: branch.color,
      });
      console.log("Selected branch color:", branch.color);
    }
  };

  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const roomId = e.target.value;
    setSelectedRoom(roomId);
    const branch = branches.find((branch) => branch.id === selectedBranch);
    const room = branch?.rooms.find((room) => room.id === roomId);

    if (room && branch) {
      setSelectedBranch(branch.id);
      onRoomSelect({
        roomName: room.room_name,
        description: room.description,
        roomImage: room.room_img,
        roomID: room.id,
        branchID: branch.id,
        branchColor: branch.color,
      });
      console.log("Selected room - branch color:", branch.color);
      console.log("Selected room -  branch id:", branch.id);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

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

      {selectedBranch && (
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
            value={selectedRoom}
            onChange={handleRoomChange}
          >
            {branches
              .find((branch) => branch.id === selectedBranch)
              ?.rooms.map((room) => (
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
