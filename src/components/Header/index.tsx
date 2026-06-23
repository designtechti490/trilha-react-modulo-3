import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";

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
              <MenuRight as="a" href="#">
                Home
              </MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
