import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import AuthService from "../services/AuthService";

import UserService from "../services/UserService";
import User from "./../models/User";

const BoardUser = () => {
  const [content, setContent] = useState(new User());
  const [isClicked, setIsClicked] = useState(false);
  const [passwordToCheck, setPasswordToCheck] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function onUpdateClickHandler() {
    AuthService.update(content.email, passwordToCheck, newPassword)
      .then((e) => {
        console.log("====================================");
        console.log("Update: ", e);
        console.log("====================================");
      })
      .catch((e) => {
        console.log("====================================");
        console.log("Update Error: ", e.message);
        console.log("====================================");
      });
  }

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data.data);
        console.log("====================================");
        console.log("content", content);
        console.log("====================================");
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <Card
          style={{
            width: "52rem",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Profile</Card.Title>
            <Card.Text>Email: {content.email}</Card.Text>
            <Card.Text>First Name: {content.firstName}</Card.Text>
            <Card.Text>Last Name: {content.lastName}</Card.Text>
            <center>
              <Button variant="success" onClick={() => setIsClicked(true)}>
                Update
              </Button>
            </center>
          </Card.Body>
        </Card>
        <div>
          {isClicked === true && (
            <Card>
              <Card.Body>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <Card.Text>Old Password: </Card.Text>
                  <input
                    style={{ borderLine: 3, height: 35, marginLeft: 11 }}
                    required
                    onChange={(e) => setPasswordToCheck(e.target.value)}
                  ></input>
                </div>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <Card.Text>New Password: </Card.Text>
                  <input
                    style={{ borderLine: 3, height: 35, marginLeft: 5 }}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                </div>
                <Button variant="primary" onClick={onUpdateClickHandler}>
                  Update Password
                </Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </header>
    </div>
  );
};

export default BoardUser;
