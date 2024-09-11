import artwork from "../../data/mockAlbumArtwork.json";

const getRandomArtwork = () => {
  // Generate random number between 0 and 20
  const randomNumber = Math.floor(Math.random() * 20);
  return artwork[randomNumber];
};

export default getRandomArtwork;
