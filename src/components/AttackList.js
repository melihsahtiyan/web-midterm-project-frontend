import React, { useState, useLayoutEffect } from "react";
import AttackDetailService from "../services/AttackDetailService";
import { Card } from "react-bootstrap";

const AttackList = () => {
  const [contents, setContent] = useState([]);

  useLayoutEffect(() => {
    AttackDetailService.getPublicContent().then(
      (response) => {
        setContent(response.data.data);
        console.log("Response data: ", response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        console.log("Error: ", error.message);
        setContent(_content);
      }
    );
    console.log("Content: ", contents);
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {contents.map((content, index) => {
          return (
            <Card>
              <Card.Body>
                <Card.Text scope="row"># {content.id}</Card.Text>
                <Card.Text scope="row">
                  Attack Description: {content.attackDescription}
                </Card.Text>
                <Card.Text>Date: {content.date}</Card.Text>
                <Card.Text>User # : {content.userId}</Card.Text>
                <Card.Text>Attack Type: {content.attackType}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </header>
    </div>
  );
};

export default AttackList;
