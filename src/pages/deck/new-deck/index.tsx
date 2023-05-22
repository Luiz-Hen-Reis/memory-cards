import Head from "next/head";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { recoverUserInformation } from "@/libs/auth";

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
        <Styled.Container onSubmit={onSubmit}>
          <h1>Criar Novo Baralho</h1>
          <label htmlFor="title">Título</label>
          <input
            {...register("title")}
            type="text"
            name="title"
            placeholder="Nome do seu novo baralho"
          />

          <input type="submit" value="Adicionar" />
        </Styled.Container>
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
