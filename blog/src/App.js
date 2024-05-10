import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Modal from "./components/Modal";
import Detail from "./pages/Detail";

function App() {
  let [title, setTitle] = useState(["num1", "num2", "num3"]);
  let [titleNum, setTitleNum] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Reviewing...</div>
      </div>

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4>{a}</h4>
            <button
              onClick={() => {
                setTitleNum(i);
              }}
            >
              {i + 1}
            </button>
          </div>
        );
      })}

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        ModalButton
      </button>
      {modal == true ? <Modal title={title} titleNum={titleNum} /> : null}

      <Routes>
        <Route
          path="/detail"
          element={
            <div>
              <Detail />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
