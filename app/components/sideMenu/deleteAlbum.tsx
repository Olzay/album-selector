"use client";

import { useState } from "react";
import type { AlbumProps } from "../album/album";
import { FaRegTrashAlt } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";
import { useRouter, useParams } from "next/navigation";

const DeleteAlbum = () => {
  const router = useRouter();
  const params = useParams();
  const [albumsFromLocalStorage, setAlbumbsInLocalStorage] = useLocalStorage("albums", "");
  const [allAlbums, setAllAlbums] = useState(albumsFromLocalStorage);

  const albumId = params.album && params.album.slice(params.album.lastIndexOf("-") + 1);

  const handleAlbumDeletion = () => {
    // Find the album and track indices
    const albumIndex = allAlbums.albums.findIndex((album: AlbumProps) => album.album_id === albumId);

    // Make a copy of the current state
    const newAlbums = { ...allAlbums };
    newAlbums.albums.splice(albumIndex, 1);

    // Update both localStorage and route back to the homepage
    setAlbumbsInLocalStorage(newAlbums);
    setAllAlbums(newAlbums);
    router.push("/");
  };

  return (
    albumId && (
      <div className="flex flex-row items-center my-2">
        <FaRegTrashAlt />
        <button className="ml-4" onClick={() => handleAlbumDeletion()}>
          Delete Current Album
        </button>
      </div>
    )
  );
};

export default DeleteAlbum;
