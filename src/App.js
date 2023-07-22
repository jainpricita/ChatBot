
import {  useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Start from "../src/Page/Start";
import Chat from "../src/Page/Chat";
import Error from "../src/Page/Error";
import Success from "../src/Page/Success";

function App() {
   
  const [clicked, setClicked ] = useState(false);
  const [success,setSuccess] = useState(false);
  function toggleClick(){
    setClicked(!clicked);
  }
  function toggleSuccess(){
    setSuccess(!success);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Start toggleClick={toggleClick}/>} />
          <Route
            path="chat"
            element={clicked ? <Chat /> : <Navigate replace to={"/"} />}
          />
          <Route path="success" element={success ? <Success /> : <Navigate replace to={"/"} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
