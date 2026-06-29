import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input as="input" placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
           {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />{" "}
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
            </>
          ) : (
            <>
              <MenuRight href='/'>
                Home
              </MenuRight>
              <Button title="Entrar" onClick={() => {navigate('/login')}} />
              <Button title="Cadastrar" onClick={() => {navigate('/register')}} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
