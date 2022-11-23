import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormData() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  function handleChange(event) {
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <Form.Label>Userame</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
