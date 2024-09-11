"use client";

import { useEffect, useState } from "react";
import Track from "../track/track";
import type { TrackProps } from "../track/track";
import useLocalStorage from "../hooks/useLocalStorage";
import type { AlbumProps } from "../album/album";
import { getRandomTrackLength } from "../utilities";
import { usePathname } from "next/navigation";

const Tracks = () => {
  const pathname = usePathname();
  const [albumsFromLocalStorage, setAlbumsInLocalStorage] = useLocalStorage("albums", "");
  const [allAlbums, setAllAlbums] = useState(albumsFromLocalStorage);
  const [singleAlbum, setSingleAlbum] = useState<AlbumProps | undefined>(undefined);
  const [currentTrack, setCurrentTrack] = useState<TrackProps>({
    id: "",
    title: "",
    artist: "",
    genre: "",
    length: "",
  });
  const [task, setTask] = useState("Create");

  const albumId = pathname.split("-").pop(); // extract album id
  const albumIndex = allAlbums?.albums?.findIndex((album: AlbumProps) => album.album_id == albumId);

  useEffect(() => {
    setSingleAlbum(allAlbums.albums?.find((album: AlbumProps) => album.album_id == albumId));
  }, [allAlbums, albumId]);

  const updateLocalStorageAndState = (newAlbums: any) => {
    setAlbumsInLocalStorage(newAlbums);
    setAllAlbums(newAlbums);
  };

  const handleTrackAdditionAndUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentTrack.title.trim()) {
      alert("Please enter a title name");
      return;
    }

    const newAlbums = { ...allAlbums };
    const tracks = newAlbums.albums[albumIndex].tracks;
    // const trackIndex = tracks.findIndex((track: TrackProps) => track.id == currentTrack.id);

    if (task === "Edit") {
      tracks[currentTrack.id] = { ...currentTrack };
    } else {
      newAlbums.albums[albumIndex].tracks.push({
        ...currentTrack,
        id: String(tracks.length),
        length: getRandomTrackLength(),
      });
    }

    updateLocalStorageAndState(newAlbums);
    resetForm();
  };

  //Move to Track component with state
  const handleTrackDeletion = (id: string) => {
    const newAlbums = { ...allAlbums };
    newAlbums.albums[albumIndex].tracks = newAlbums.albums[albumIndex].tracks.filter((track: TrackProps) => track.id !== id);

    updateLocalStorageAndState(newAlbums);
  };

  //Move to Track component with state
  const handleTrackEdit = (id: string) => {
    const track = allAlbums.albums[albumIndex].tracks[id];
    if (track) {
      setTask("Edit");
      setCurrentTrack({ ...track });
    }
  };

  //Resets form to blank state
  const resetForm = () => {
    setTask("Create");
    setCurrentTrack({ id: "", title: "", artist: "", genre: "", length: "" });
  };

  const inputStyles =
    "my-2 border bg-gray-700 border-gray-600 dark:placeholder-gray-400 dark:text-white text-sm rounded-lg block w-full p-2.5";

  return (
    <>
      <ul className="flex flex-col justify-between mt-12">
        {singleAlbum?.tracks.map((track: TrackProps) => (
          <Track key={track.id} {...track} deleteTrack={() => handleTrackDeletion(track.id)} editTrack={() => handleTrackEdit(track.id)} />
        ))}
      </ul>

      <form onSubmit={handleTrackAdditionAndUpdate} className="flex flex-row justify-between mt-12">
        <div className="flex flex-col w-4/5 justify-between">
          <input
            className={inputStyles}
            type="text"
            value={currentTrack.title}
            onChange={(e) => setCurrentTrack({ ...currentTrack, title: e.target.value })}
            placeholder="Title"
          />
          <input
            className={inputStyles}
            type="text"
            value={currentTrack.artist}
            onChange={(e) => setCurrentTrack({ ...currentTrack, artist: e.target.value })}
            placeholder="Artist"
          />
          <input
            className={inputStyles}
            type="text"
            value={currentTrack.genre}
            onChange={(e) => setCurrentTrack({ ...currentTrack, genre: e.target.value })}
            placeholder="Genre"
          />
        </div>

        <div className="flex flex-col w-1/5 mx-3">
          <input className={`h-full cursor-pointer ${inputStyles}`} type="submit" value={task} />
          {task === "Edit" && (
            <button type="button" className={`bg-red-900 font-bold ${inputStyles}`} onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Tracks;
