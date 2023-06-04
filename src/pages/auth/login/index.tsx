import Head from "next/head";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";
import styled, { css } from "styled-components";

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
    <Container>
      <Head>
        <title>{isRegistered ? "Login" : "Cadastrar"}</title>
      </Head>

      <FormContainer>
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
      </FormContainer>
    </Container>
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

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
  `}
`;

const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.ultraViolet};
    padding: ${theme.spacings.small};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    width: 32rem;
    min-height: 49rem;

    h2 {
      font-size: ${theme.font.sizes.large};
      margin: 0 auto ${theme.spacings.medium};
      text-align: center;

      @media ${theme.media.medium} {
        font-size: ${theme.font.sizes.large};
      }
    }

    form {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      font-size: ${theme.font.sizes.small};
      width: 95%;

      input {
        all: unset;
        height: ${theme.spacings.xlarge};
        background-color: ${theme.colors.mintCream};
        border-radius: ${theme.borderRadius};
        padding: 5px;
        box-shadow: ${theme.boxShadow};
        margin-bottom: ${theme.spacings.medium};
        color: ${theme.colors.eerieBlack};

        &[type="submit"] {
          background-color: ${theme.colors.eerieBlack};
          color: ${theme.colors.mintCream};
          text-align: center;
          cursor: pointer;
        }
      }
    }

    b {
      font-size: 1.2rem;
      text-align: right;
      margin-bottom: ${theme.spacings.medium};

      span {
        color: ${theme.colors.columbiaBlue};
        cursor: pointer;
      }
    }
  `}
`;
