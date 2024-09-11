const getRandomTrackLength = () => {
  // Generate random minutes between 2 and 5
  const minutes = Math.floor(Math.random() * 4) + 2;
  // Generate random seconds between 0 and 59
  const seconds = Math.floor(Math.random() * 60);
  // Format seconds to always be two digits
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  // Return the song length in MM:SS format
  return `${minutes}:${formattedSeconds}`;
};

export default getRandomTrackLength;
