import React, { useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserService from "../services/UserService";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});

  useLayoutEffect(() => {
    console.log("Email", localStorage.getItem("email"));
    UserService.getUserBoard().then(
      (response) => {
        setUser(response.data.data);
        console.log("Response data: ", response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        console.log("Error: ", error.message);
        setUser(_content);
      }
    );
    console.log("Content: ", user);
  }, []);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
