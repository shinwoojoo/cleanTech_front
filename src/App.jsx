import { BrowserRouter } from "react-router-dom";
// import Aside from "./components/Atoms/Aside";
import LoginPage from './pages/LoginPage';
import './style/style.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <LoginPage></LoginPage>
      </BrowserRouter>
    </>
  );
}

export default App
