"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { TrackProps } from "../track/track";

export interface AlbumProps {
  album_id: string;
  album_name: string;
  artist: string;
  artwork: ArtWork;
  tracks: TrackProps[];
  shouldLink: Boolean;
}

interface ArtWork {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const Album = ({ album_id, album_name, artist, artwork, shouldLink }: AlbumProps) => {
  const component = (
    <div className="group overflow-hidden transform transition duration-y">
      <Image
        className={`w-full h-80 object-cover ${shouldLink && "group-hover:scale-125 transform transition duration-700"}`}
        src={artwork?.download_url || "/"}
        width={500}
        height={400}
        placeholder="blur"
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z+hHgAG8gJbXcqMLQAAAABJRU5ErkJggg=="
        }
        alt={album_name || ""}
      />
      <div className="absolute w-full bottom-0 p-5 z-10">
        <p className="font-bold">{album_name}</p>
        <p>{artist}</p>
      </div>
      <div className="absolute w-full h-full bottom-0 p-5 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );

  return (
    <div data-component={"Album"} className="relative" data-id={album_id}>
      {shouldLink ? <Link href={`/album-${album_id}`}>{component}</Link> : component}
    </div>
  );
};

export default Album;
