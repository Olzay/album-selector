import User from "./user";
import { FaRegUser } from "react-icons/fa";
import mockUsers from "../../data/mockUsers.json";

interface ChangeUserProps {}
const ChangeUser = ({}: ChangeUserProps) => {
  return (
    <div className="flex flex-col grow">
      <div className="flex flex-row items-center">
        <FaRegUser />
        <span className="ml-4 font-bold">Change User</span>
      </div>
      <div className="relative ml-8">
        <ul className="mt-4">
          {mockUsers.map((user) => {
            return <User key={user.id} {...user} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChangeUser;
