import React from "react";

const UserItem = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div>
      <h3>{name}</h3>
      <p>
        Username - {username} ; Email - {email}
      </p>
    </div>
  );
};

export default UserItem;
