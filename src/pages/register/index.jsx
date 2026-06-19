import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      if (data.length > 0) {
        alert("Já existe um usuário com este email");
        return;
      }

      await api.post("users", {
        name: formData.name,
        email: formData.email,
        senha: formData.password,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Cadastre-se</TitleLogin>
            <SubtitleLogin>
              Crie sua conta e faça parte da comunidade.
            </SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <CriarText onClick={() => navigate("/login")}>
                Já possui conta? Faça login
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
