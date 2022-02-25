import React, { useState } from "react";

export default function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${email}`);
    onValidated({
      EMAIL: email,
      NAME: "John"
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <label>
        Name:
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
