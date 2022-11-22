import FormData from "./FormData";
import NavigationBar from "./NavigationBar";
import { TableData } from "./TableData";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="d-flex justify-content-center mt-5">
        <h1>Data Table</h1>
      </div>
      <div className="mx-5 mt-5">
        <TableData />
        <FormData />
      </div>
    </div>
  );
}

export default App;
