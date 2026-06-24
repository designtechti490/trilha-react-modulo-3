import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

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
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
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
          {autenticado ? (
            <UserPicture
              as="img"
              src="https://avatars.githubusercontent.com/u/45184516?v=4"
              alt="Foto do usuário"
            />
          ) : (
            <>
              <MenuRight as="a" onClick={() => navigate("/")}>
                Home
              </MenuRight>
              <Button title="Entrar" onClick={handleSignIn} />
              <Button title="Cadastrar" onClick={handleSignUp} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
