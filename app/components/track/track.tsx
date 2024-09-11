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
    <li data-component={"track " + id} className="flex py-2 list-none items-center justify-between">
      <>
        {/* edit, song title and artist */}
        <div className="flex items-center w-3/5">
          <button value={id} onClick={(e) => handleEditTrack(e)} className="mr-4">
            <FaEdit className="pointer-events-none" />
          </button>
          <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            {artist && <span className="mx-1 max-w-40 text-ellipsis overflow-hidden">by {artist}</span>}
          </div>
        </div>
      </>
      <>
        {/* genre */}
        <div className="flex justify-between mx-12">
          <span className="">{genre}</span>
        </div>
      </>
      <>
        {/* song length and delete */}
        <div className="flex justify-between w-16">
          <span className="">{length}</span>
          <button value={id} onClick={(e) => handleDeleteTrack(e)} className="ml-auto">
            <FaRegTrashAlt className="pointer-events-none" />
          </button>
        </div>
      </>
    </li>
  );
};

export default Track;
