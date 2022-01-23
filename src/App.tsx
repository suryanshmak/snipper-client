import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SnippetPage from "./pages/SnippetPage";
import Form from "./pages/CreatePage";
import "./styles.css";
import NavBar from "./components/NavBar";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserProvider";

function App() {
  const { isSigned } = useContext(UserContext);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippet/:id" element={<SnippetPage />} />
        <Route
          path="/snippet/create"
          element={isSigned ? <Form /> : <Navigate to="/user/login" />}
        />
        <Route
          path="/user/sign-up"
          element={isSigned ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/user/login"
          element={isSigned ? <Navigate to="/" /> : <LoginForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
