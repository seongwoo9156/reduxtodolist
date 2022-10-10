import "./App.css";
import Main from "./components/pages/Main";
import GlobalStyled from "./components/GlobalStyled/GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
