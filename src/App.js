import { useState } from "react";
import "./App.css";
import Form from "./Component/Form/Form";
import Header from "./Component/Header";
import { ToastContainer } from "react-toastify";
import Table from "./Component/Table/Table";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <ToastContainer />
      <Header setShow={setShow} />
      {show ? <Form setShow={setShow} /> : ""}
      <Table />
    </div>
  );
}

export default App;
