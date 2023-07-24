import { useSelector } from "react-redux/es/hooks/useSelector";
import { selected } from "./redux/validationSlice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Start from "./Pages/Start";
import Chat from "./Pages/Chat";
import Error from "./Pages/Error";
import Success from "./Pages/Success";

function App() {
  const selector=useSelector(selected);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Start/>} />
          <Route
            path="chat"
            element={selector.clicked ? <Chat /> : <Navigate replace to={"/"} />}
          />
          <Route path="success" element={selector.user.name!="" ? <Success/> : <Navigate replace to={"/"} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
