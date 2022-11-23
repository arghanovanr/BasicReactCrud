import { useState } from "react";
import NavigationBar from "./NavigationBar";
import TableData from "./TableData";
import { uid } from "uid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  //State Data
  const [userdata, setUserdata] = useState([
    {
      id: 1,
      firstname: "Lorem",
      lastname: "Ipsum",
      username: "@loremipsum",
    },
    {
      id: 2,
      firstname: "Dolor",
      lastname: "Sit",
      username: "@dolorsit",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  //Function
  function handleChange(event) {
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("table updated");
    let data = [...userdata];
    //Validation
    if (formData.firstname === "") {
      return false;
    }
    if (formData.lasttname === "") {
      return false;
    }
    if (formData.username === "") {
      return false;
    }
    if (isUpdate.status) {
      data.forEach((userdata) => {
        if (userdata.id === isUpdate.id) {
          // Updating data
          userdata.firstname = formData.firstname;
          userdata.lastname = formData.lastname;
          userdata.username = formData.username;
        }
      });
    } else {
      //Adding data
      data.push({
        id: uid(),
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
      });
    }

    setUserdata(data);

    //Reset status after adding data and update data
    setFormData({ firstname: "", lastname: "", username: "" });
    setIsUpdate({ id: null, status: false });
  }

  function handleEdit(id) {
    let data = [...userdata];
    let updateData = data.find((userdata) => userdata.id === id);
    setFormData({
      firstname: updateData.firstname,
      lastname: updateData.lastname,
      username: updateData.username,
    });
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    let data = [...userdata];
    let filteredData = data.filter((userdata) => userdata.id !== id);
    setUserdata(filteredData);
    alert("data deleted");
  }
  return (
    <div className="App">
      <NavigationBar />
      <div className="d-flex justify-content-center mt-5">
        <h1>Data Table</h1>
      </div>
      <div className="mx-5 mt-5">
        <TableData
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          data={userdata}
        />
        <Form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}

export default App;
