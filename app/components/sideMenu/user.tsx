import React from "react";

interface HeaderUser {
  id: number;
  first_name: string;
  last_name: string;
}
const User = ({ id, first_name, last_name }: HeaderUser) => {
  return (
    <li data-id={id}>
      {first_name} {last_name}
    </li>
  );
};

export default User;
