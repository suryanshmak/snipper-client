import { Title, StyledA, Div, Nav, Header, Button } from "./styles";
import Logo from "../../assets/logo.png";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

const NavBar = () => {
  const { isSigned, setIsSigned } = useContext(UserContext);
  const handleLogoutClick = async () => {
    await axios.post("http://localhost:8080/user/logout", "", {
      withCredentials: true,
    });
    setIsSigned(false);
  };
  return (
    <header>
      <Header>
        <img src={Logo} alt="logo" />
        <h1>
          <Title to="/">Snippetbox</Title>
        </h1>
      </Header>
      <Nav>
        <Div>
          <StyledA to="/">Home</StyledA>
          {isSigned && <StyledA to="/snippet/create">Create snippet</StyledA>}
        </Div>
        <Div>
          {!isSigned && (
            <>
              <StyledA to="/user/sign-up">Sign Up</StyledA>
              <StyledA to="/user/login">Log in</StyledA>
            </>
          )}
          {isSigned && <Button onClick={handleLogoutClick}>Log out</Button>}
        </Div>
      </Nav>
    </header>
  );
};

export default NavBar;
