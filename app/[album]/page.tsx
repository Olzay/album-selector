"use client";

import { useEffect, useState } from "react";
import Album from "../components/album/album";
import Track from "../components/track/track";
import type { TrackProps } from "../components/track/track";
import useLocalStorage from "../components/hooks/useLocalStorage";
import type { AlbumProps } from "../components/album/album";
import { getRandomTrackLength } from "../components/utilities";
import Tracks from "../components/track/tracks";

interface AlbumPageProps {
  params: {
    album: string;
  };
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const [albumsFromLocalStorage] = useLocalStorage("albums", "");
  const [singleAlbum, setSingleAlbum] = useState<AlbumProps | undefined>(undefined);

  useEffect(() => {
    const albumId = params.album.split("-").pop(); // extract album id
    setSingleAlbum(albumsFromLocalStorage.albums?.find((album: AlbumProps) => album.album_id == albumId));
  }, [albumsFromLocalStorage]);

  return (
    <main className="grow w-full max-w-[1280px] m-auto" data-component="Album Page">
      {singleAlbum && <Album {...singleAlbum} shouldLink={false} />}
      <div className="w-3/4 m-auto">
        <Tracks />
      </div>
    </main>
  );
}
