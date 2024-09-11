import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import mockAlbums from "../../data/mockAlbums.json";

import Album from "./album";
import type { AlbumProps } from "./album";

const Albums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albumsFromLocalStorage, setAlbumbsInLocalStorage] = useLocalStorage("albums", "");

  useEffect(() => {
    // Only load mock data if no albums are present in localStorage
    if (!albumsFromLocalStorage || albumsFromLocalStorage === "") {
      setAlbumbsInLocalStorage(mockAlbums);
    }
    setIsLoading(false);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div data-component={"Albums"} className="w-full grid grid-cols-4 gap-1">
      {!isLoading ? (
        albumsFromLocalStorage.albums.map((album: AlbumProps) => {
          return <Album key={album.album_id} {...album} shouldLink={true} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Albums;
