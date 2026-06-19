import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" onClick={handleSignIn}/>
                        <Button title="Cadastrar" onClick={handleSignUp}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
