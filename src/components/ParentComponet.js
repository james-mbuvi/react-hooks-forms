import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    console.log(event.target.value);
  }

  function handleLastNameChange(event) {
    console.log(event.target.value);
  }

  return (
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
  );
}

export default ParentComponent;