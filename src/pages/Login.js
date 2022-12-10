import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div>
        <h5>Email :</h5>
        <input />
      </div>
    </div>
  );
}
