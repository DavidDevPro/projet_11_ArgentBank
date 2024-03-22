import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import UserEditName from "./pages/UserEditName";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/user_edit" element={<UserEditName />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
