import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export interface TrackProps {
  id: string;
  title: string;
  artist: string;
  genre: string;
  length: string;
  editTrack?: (e: any) => void;
  deleteTrack?: (e: any) => void;
}

const Track = ({ id, title, artist, genre, length, deleteTrack, editTrack }: TrackProps) => {
  const handleEditTrack = (e: any) => {
    if (editTrack) {
      editTrack(e);
    }
  };

  const handleDeleteTrack = (e: any) => {
    if (deleteTrack) {
      deleteTrack(e);
    }
  };

  return (
    <li
      data-component={"track " + id}
      className="flex flex-col sm:flex-row py-4 px-2 list-none items-start sm:items-center justify-between bg-gray-700 border-gray-600 shadow-sm rounded-lg mb-4"
    >
      {/* Edit, Song Title, and Artist */}
      <div className="flex items-center w-full sm:w-3/5 mb-3 sm:mb-0">
        <button value={id} onClick={(e) => handleEditTrack(e)} className="mr-4 text-gray-100 hover:text-gray-900">
          <FaEdit className="pointer-events-none" />
        </button>
        <div className="flex flex-col">
          <span className="font-bold text-gray-100">{title}</span>
          {artist && (
            <>
              <span className="text-sm text-gray-100 truncate">by {artist}</span>
              <span className="text-sm text-gray-100 truncate">({genre})</span>
            </>
          )}
        </div>
      </div>
      {/* Song Length and Delete */}
      <div className="flex justify-between w-full sm:w-16">
        <span className="text-sm text-gray-100">{length}</span>
        <button value={id} onClick={(e) => handleDeleteTrack(e)} className="ml-4 text-red-600 hover:text-red-800">
          <FaRegTrashAlt className="pointer-events-none" />
        </button>
      </div>
    </li>
  );
};

export default Track;

// <li data-component={"track " + id} className="flex py-2 list-none items-center justify-between">
//   <>
//     {/* edit, song title and artist */}
//     <div className="flex items-center w-3/5">
//       <button value={id} onClick={(e) => handleEditTrack(e)} className="mr-4">
//         <FaEdit className="pointer-events-none" />
//       </button>
//       <div className="flex flex-col">
//         <span className="font-bold">{title}</span>
//         {artist && <span className="mx-1 max-w-40 text-ellipsis overflow-hidden">by {artist}</span>}
//       </div>
//     </div>
//   </>
//   <>
//     {/* genre */}
//     <div className="flex justify-between mx-12">
//       <span className="">{genre}</span>
//     </div>
//   </>
//   <>
//     {/* song length and delete */}
//     <div className="flex justify-between w-16">
//       <span className="">{length}</span>
//       <button value={id} onClick={(e) => handleDeleteTrack(e)} className="ml-auto">
//         <FaRegTrashAlt className="pointer-events-none" />
//       </button>
//     </div>
//   </>
// </li>
