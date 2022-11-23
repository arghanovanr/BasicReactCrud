import { useState } from "react";
import NavigationBar from "./NavigationBar";
import TableData from "./TableData";
import FormData from "./FormData";

function App() {
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

  return (
    <div className="App">
      <NavigationBar />
      <div className="d-flex justify-content-center mt-5">
        <h1>Data Table</h1>
      </div>
      <div className="mx-5 mt-5">
        <TableData data={userdata} />
        <FormData />
      </div>
    </div>
  );
}

export default App;
