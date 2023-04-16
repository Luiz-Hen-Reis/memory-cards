import Head from "next/head";
import * as Styled from "./styles";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const [isRegistered, setIsRegistered] = useState(true);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    router.push('/');
  }

  return (
    <Styled.Container>
      <Head>
        <title>{isRegistered ? "Login" : "Cadastrar"}</title>
      </Head>

      <Styled.FormContainer>
        <h2>
          {isRegistered
            ? "Fazer Login"
            : "Registre-se"}
        </h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email-adress">Email</label>
          <input
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
            type="password"
            id="password-adress"
            name="password"
            required
            placeholder="Digite Sua Senha"
          />
          <b>
            {isRegistered ? 'Não possui cadastro ainda?' : 'Já possui Cadastro?'} <span onClick={() => setIsRegistered(!isRegistered)}>{isRegistered ? 'Cadastrar' : 'Fazer Login'}</span>
          </b>
          <input type="submit" value={isRegistered ? 'Fazer Login' : 'Registrar'} />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
}

export default Login;
