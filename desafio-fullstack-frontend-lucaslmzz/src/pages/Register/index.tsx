import { useForm } from "react-hook-form";
import { ButtonMain } from "../../components/Button/style";
import {
  BtnBack,
  Container,
  DivLogoBtn,
  Span,
} from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Form } from "../Login/style";
import { Error, Select } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext";

interface IErrorsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const Register = () => {
  const { SubRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    name: yup.string().required("Nome   obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    phone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IErrorsRegister>({
    resolver: yupResolver(schema),
  });

  const exit = () => {
    navigate("/");
  };
  return (
    <Container>
      <DivLogoBtn>
        <Logo>Client Manager</Logo>
        <BtnBack onClick={exit}>Voltar</BtnBack>
      </DivLogoBtn>
      <ToastContainer />
      <Form onSubmit={handleSubmit(SubRegister)}>
        <h2>Crie sua conta</h2>
        <Span>Rápido e grátis, vamos nessa</Span>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          id="name"
          placeholder="Nome completo"
          {...register("name")}
        />
        <Error>{errors.name?.message}</Error>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        <Error>{errors.email?.message}</Error>
        <label htmlFor="password">Senha</label>
        <Input
          type="text"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <Error>{errors.password?.message}</Error>

        <label htmlFor="phone">Telefone</label>
        <Input
          type="text"
          id="phone"
          placeholder="Telefone"
          {...register("phone")}
        />
        <Error>{errors.phone?.message}</Error>
        <ButtonMain>Cadastrar</ButtonMain>
      </Form>
    </Container>
  );
};

export default Register;
