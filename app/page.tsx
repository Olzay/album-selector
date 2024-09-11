"use client";

import Albums from "./components/album/albums";

export default function Home() {
  return (
    <main className="grow max-w-[1280px] m-auto">
      {/* hero? */}
      <Albums />
    </main>
  );
}

// To-Do
// As a user, I can create an empty album with a name property.
// As a user, I can delete an entire album and all of its music tracks in one action.

// Done
// As a user, I can add new music tracks to an existing album with a track name, artist and genre.
// As a user, I can view all albums and music tracks which have been created.
// As a user, I can update the track name, artist and genre of an existing track.
// As a user, I can delete a track from an album.
