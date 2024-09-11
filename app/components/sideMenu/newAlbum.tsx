"use client";

import { useState } from "react";
import { FaPlus, FaRegCheckCircle, FaRegStopCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import { getRandomArtwork, getRandomUser } from "../utilities";

const NewAlbum = () => {
  const router = useRouter();
  const [albumsFromLocalStorage, setAlbumbsInLocalStorage] = useLocalStorage(
    "albums",
    ""
  );
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");

  // Handle the album creation form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter an album name");
      return;
    }

    if (!albumsFromLocalStorage) {
      alert(
        "Oops, something went wrong after resetting the data. Try refreshing the page?"
      );
      return;
    }

    const randomUser = getRandomUser();
    const randomArtwork = getRandomArtwork();
    const newAlbumId = `alb00${albumsFromLocalStorage.albums.length + 1}`;

    const newAlbum = {
      album_id: newAlbumId,
      album_name: name.trim(),
      artist: `${randomUser.first_name} ${randomUser.last_name}`,
      artist_id: "1",
      artwork: randomArtwork,
      tracks: [],
    };

    // Add the new album to the album list
    const updatedAlbums = {
      ...albumsFromLocalStorage,
      albums: [...albumsFromLocalStorage.albums, newAlbum],
    };

    // Update localStorage and navigate to the new album page
    setAlbumbsInLocalStorage(updatedAlbums);
    router.push(`/${newAlbumId}`);
    setName("");
    setShowInput(false); // Hide the input field after creation
  };

  // Input styles for the form
  const inputStyles =
    "my-2 border bg-gray-700 border-gray-600 dark:placeholder-gray-400 dark:text-white text-sm rounded-lg block w-full p-2.5";

  return (
    <div>
      <div className="flex flex-row items-center my-2">
        <FaPlus />
        <button
          className="ml-4 border-transparent border-b-2 hover:border-b-2 hover:border-white transition-colors ease-in-out duration-1000"
          onClick={() => setShowInput(true)}
        >
          Create New Album
        </button>
      </div>

      {showInput && (
        <div className="flex flex-col mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row ml-8">
              <input
                className={inputStyles}
                id="newAlbum"
                type="text"
                name="albumName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Album Name"
              />
              <div className="flex items-center w-2/6 justify-around">
                <button title="create" className="" type="submit">
                  <FaRegCheckCircle size={20} className="pointer-events-none" />
                </button>
                <button
                  title="cancel"
                  type="button"
                  className=""
                  onClick={() => setShowInput(false)}
                >
                  <FaRegStopCircle size={20} className="pointer-events-none" />
                </button>
              </div>
            </div>
          </form>
          <p className="ml-8 mt-2">
            <i>A random image and user will be assigned</i>
          </p>
        </div>
      )}
    </div>
  );
};

export default NewAlbum;
