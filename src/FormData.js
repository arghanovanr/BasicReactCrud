import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormData() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter your First Name"
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter your Last Name"
        />
        <Form.Label>Userame</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter your Username"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
