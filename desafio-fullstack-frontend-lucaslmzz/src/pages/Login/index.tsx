import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Span } from "../../components/Span/style";
import { AuthContext } from "../../Providers/AuthContext";
import { Form } from "./style";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { SubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <Container>
      <Logo>Client Manager</Logo>
      <Form onSubmit={handleSubmit(SubLogin)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" {...register("email")} />
        <label htmlFor="senha">Senha</label>
        <Input type="password" placeholder="Senha" {...register("password")} />

        <ButtonMain>Login</ButtonMain>

        <Span>Ainda não possui uma conta?</Span>

        <ButtonMain onClick={handleRegister} type="reset">
          Cadastre-se
        </ButtonMain>
      </Form>
    </Container>
  );
};

export default Login;
