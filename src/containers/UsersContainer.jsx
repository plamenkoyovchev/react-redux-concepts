import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../store";
import UserItem from "../components/UserItem";

const UsersContainer = ({ usersState, getUsers }) => {
  const { loading, users } = usersState;
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {users &&
        users.length > 0 &&
        users.map((user) => <UserItem key={user.id} user={user} />)}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    usersState: state.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
