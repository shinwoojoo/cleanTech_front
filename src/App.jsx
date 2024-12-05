import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Aside from "./components/Atoms/Aside";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./style/style.css";
import Popup from "./components/Atoms/Popup";
import Popup2 from "./components/Atoms/Popup2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Main" element={<MainPage />}></Route>
          <Route path="/Popup" element={<Popup />}></Route>
          <Route path="/Popup2" element={<Popup2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
