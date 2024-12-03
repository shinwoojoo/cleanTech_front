import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Aside from "./components/Atoms/Aside";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./style/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Main" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
