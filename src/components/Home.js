import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserService from "../services/UserService";
import AttackScreen from "./AttackScreen";

const Home = () => {
  const [contents, setContent] = useState([]);

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
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
        <h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col-md-1">#</th>
                <th scope="col-md-2">Name</th>
                <th scope="col-md-3">Surname</th>
                <th scope="col-md-4">Email</th>
                <th scope="col-md-2"></th>
              </tr>
            </thead>
            {contents.map((content, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{content.id}</th>
                    <td>{content.firstName}</td>
                    <td>{content.lastName}</td>
                    <td>{content.email}</td>
                    <td>
                      <Link to={"/attackScreen"} className="btn btn-primary">
                        Attack
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </h3>
      </header>
    </div>
  );
};

export default Home;
