import Head from "next/head";
import * as Styled from "./styles";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";

type FormValues = {
  email: string;
  name: string;
  password: string;
};

function Login() {
  const { signIn, signUp } = useAuthContext();
  const [isRegistered, setIsRegistered] = useState(true);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    if (isRegistered) {
      await signIn(data);
    } else {
      await signUp(data);
    }
  });

  return (
    <Styled.Container>
      <Head>
        <title>{isRegistered ? "Login" : "Cadastrar"}</title>
      </Head>

      <Styled.FormContainer>
        <h2>{isRegistered ? "Fazer Login" : "Registre-se"}</h2>

        <form onSubmit={onSubmit}>
          <label htmlFor="email-adress">Email</label>

          <input
            {...register("email")}
            type="email"
            id="email-adress"
            name="email"
            required
            placeholder="Digite Seu Email"
          />
          {!isRegistered && (
            <>
              <label htmlFor="name">Nome</label>
              <input
                {...register("name")}
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite Seu Nome"
              />
            </>
          )}
          <label htmlFor="password">Senha</label>
          <input
            {...register("password")}
            type="password"
            id="password-adress"
            name="password"
            required
            placeholder="Digite Sua Senha"
          />
          <b>
            {isRegistered
              ? "Não possui cadastro ainda?"
              : "Já possui Cadastro?"}{" "}
            <span onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Cadastrar" : "Fazer Login"}
            </span>
          </b>
          <input
            type="submit"
            value={isRegistered ? "Fazer Login" : "Registrar"}
          />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "nextmemorycard.token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
