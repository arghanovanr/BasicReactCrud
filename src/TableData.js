import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
export default function TableData({ data, handleEdit, handleDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((userdata) => {
          return (
            <tr>
              <td>{userdata.firstname}</td>
              <td>{userdata.lastname}</td>
              <td>{userdata.username}</td>
              <td>
                <Button
                  onClick={() => handleEdit(userdata.id)}
                  variant="primary"
                  className="btn btn-sm mx-2 "
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(userdata.id)}
                  variant="danger"
                  className="btn btn-sm mx-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
