import users from "../../data/mockUsers.json";

const getRandomUser = () => {
  // Generate random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3);
  return users[randomNumber];
};

export default getRandomUser;
