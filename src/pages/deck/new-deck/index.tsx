import Head from "next/head";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { recoverUserInformation } from "@/libs/auth";
import styled, { css } from "styled-components";

function NewDeck() {
  const { register, handleSubmit, setValue } = useForm();
  const { user } = useAuthContext();

  const onSubmit = handleSubmit(async ({ title }) => {
    try {
      const response = await axios.post(
        `/api/auth/user/${user?.id}/create-deck`,
        { title }
      );

      window.location.href = '/';

      if (response.status === 201) {
        toast.success(`${title} criado com sucesso!`);
        setValue("title", "");
      } else {
        throw new Error();
      }
    } catch (error) {
      setValue("title", "");
      console.log(error);
    }
  });

  return (
    <>
      <Head>
        <title>Novo Baralho</title>
      </Head>
      <main>
        <Container onSubmit={onSubmit}>
          <h1>Criar Novo Baralho</h1>
          <label htmlFor="title">Título</label>
          <input
            {...register("title")}
            type="text"
            name="title"
            placeholder="Nome do seu novo baralho"
          />

          <input type="submit" value="Adicionar" />
        </Container>
      </main>
    </>
  );
}

export default NewDeck;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "nextmemorycard.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const user = await recoverUserInformation(token);

  return {
    props: {
      user,
    },
  };
};

const Container = styled.form`
${({ theme }) => css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: ${theme.spacings.xhuge} 1rem;
  height: 100%;
  font-size: ${theme.font.sizes.small};
  h1 {
    margin-bottom: ${theme.spacings.large};
    text-align: center;
  }
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
  @media ${theme.media.medium} {
      width: 40rem;
      margin: ${theme.spacings.xhuge} auto;
  }
`}
`;