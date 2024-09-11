## Getting Started

First, run the development server:
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developer Onboarding Notes

This project is a web-based album and track management system that allows users to create albums and manage the music tracks within them. The system offers CRUD (Create, Read, Update, Delete) functionality for both albums and tracks, allowing a user to efficiently manage albums and tracks with an intuitive interface. Data persistence through localStorage ensures that the album and track information is retained across page reloads. The modular structure allows for easy maintenance and extensibility.

Users can:
• Create an empty album with a name.
• Add new tracks to an existing album, specifying track details like title, artist, and genre.
• View all albums and their associated tracks.
• Update or delete tracks from an album.
• Delete entire albums, which removes all associated tracks.

## Princples and Patterns

• DRY
• Hooks
• Single responsibility

## Features

1. Create Album: Users can create new albums with a name.
2. Add Tracks: Users can add music tracks to albums, specifying the track’s title, artist, and genre.
3. View Albums and Tracks: Users can view all existing albums and their associated tracks.
4. Edit Tracks: Users can edit the details (title, artist, genre) of an existing track.
5. Delete Tracks: Users can delete specific tracks from an album. 6. Delete Album: Users can delete an entire album, which removes all tracks within it.

## Technologies Used

• React.js: For building the frontend components.
• Local Storage: Used to persist album and track data across page reloads.
• TypeScript: Provides type safety for the React components.
• Custom Hooks: A useLocalStorage hook is implemented to handle storing and retrieving album data.

## Code Structure

Components
• Album Component (Album): Represents an album, displaying its name and associated tracks.
• Track Component (Track): Represents an individual music track within an album, allowing editing and deletion of tracks.

Hooks
• useLocalStorage Hook: A custom hook that interacts with the browser’s localStorage, used to store and retrieve albums and their tracks.

Utilities
• getRandomTrackLength: Generates a random track length for newly added tracks.
• getRandomArtwork: Returns a random image for newly created albums.
• getRandomUser: Returns a random user for newly created albums.

## Key Functions

1. Album: The params object from the URL is used to identify which album to display or update.
2. Tracks Component: This is the main component of the system. It handles track data, providing the following key functionalities:
   • Track Creation & Editing: The form allows users to add new tracks or edit existing ones. The form dynamically switches between “Create” and “Edit” mode depending on user actions.
   • Track Deletion: Tracks can be deleted from an album, and the changes are reflected both in local storage and in the app’s state.
   • useEffect Hook: This hook updates the displayed album whenever the allAlbums state or the params.album value changes, ensuring the UI is synced with the correct album data.
   • handleTrackAdditionAndUpdate Function: Handles both the creation of new tracks and the editing of existing tracks. It updates the local state and localStorage with the changes.
   • handleTrackDeletion Function: Handles the deletion of a track from the album. It updates the local state and localStorage to ensure that the track is removed.
   • handleTrackEdit Function: Allows users to load the details of an existing track into the form, switching the form into “Edit” mode to modify the track.
3. Menu - New Album and Album Deletion: Users can delete an album and its tracks in one action.

## How to Use

1. Mock albums are created from localstorage, you can go in and out to view each one independently.

2. Create an Album:

   - Enter the album name and submit.
   - A new album will be created and displayed in the album list, you will also get directed to that page.

3. Add Tracks to an Album:

   - Select an album from the list.
   - Enter the track details (title, artist, genre) in the form and click “Create”.
   - The new track will be added to the album.

4. Edit a Track

   - Click on the “Edit” button next to a track
   - The track’s details will appear in the form.
   - Modify the details and submit the form to update the track.

5. Delete a Track:

   - Click on the “Delete” button next to a track to remove it from the album.

6. Delete an Album:

   - Select the album and choose the option to delete it from the left hand menu; this will remove all tracks associated with that album.
