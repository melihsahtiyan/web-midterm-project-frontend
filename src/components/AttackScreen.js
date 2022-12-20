import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import RunAttackService from "../services/RunAttackService";

const AttackScreen = (props) => {
  const [user, setUser] = useState({});
  const [ipAddress, setIpAddress] = useState({});

  useEffect(() => {
    UserService.getUserByIdBoard(props.id).then((user) => {
      setUser(user.data.data);
      setIpAddress(user.data.ipAddress);
      console.log("====================================");
      console.log("ip: ", user.data.ipAddress);
      console.log("====================================");
    });
  }, []);

  function runNmapHandler() {
    RunAttackService.runNmap(localStorage.getItem("userToAttackId"), ipAddress);
  }

  function runTokenImpersonationHandler() {
    RunAttackService.runTokenImpersonation(
      localStorage.getItem("userToAttackId")
    );
  }

  return (
    <div class="container">
      <Card
        style={{
          width: "26rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Card.Title>NMap attack</Card.Title>
          <Card.Text>
            Attackers are remote, vulnerable, and vulnerable to software
            exploitation. remote hosts and local network infrastructure, along
            with internal computers that may be malicious intent to obtain a
            list of services running on their device may try to use it. Familiar
            methods of obtaining the information in these lists port or
            vulnerability using tools brought into a system scans are included.
          </Card.Text>
          <Button variant="success" onClick={runNmapHandler}>
            Run Attack
          </Button>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "26rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Card.Title>Access Token Impersonation attack</Card.Title>
          <Card.Text>
            Adversaries may duplicate then impersonate another user's token to
            escalate privileges and bypass access controls. An adversary can
            create a new access token that duplicates an existing token using
            DuplicateToken(Ex). The token can then be used with
            ImpersonateLoggedOnUser to allow the calling thread to impersonate a
            logged on user's security context, or with SetThreadToken to assign
            the impersonated token to a thread.
          </Card.Text>
          <Button variant="success" onClick={runTokenImpersonationHandler}>
            Run Attack
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AttackScreen;
