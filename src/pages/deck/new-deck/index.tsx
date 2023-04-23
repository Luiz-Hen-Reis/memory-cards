import Head from "next/head";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import Router from "next/router";

function NewDeck() {
  const { register, handleSubmit, setValue } = useForm();
  const { user } = useAuthContext();

  const onSubmit = handleSubmit(async ({ title }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/user/${user?.id}/create-deck`,
        { title }
      );

      if (response.status === 201) {
        toast.success(`${title} criado com sucesso!`);
        Router.push("/");
        setValue("title", "");
      } else {
        throw new Error();
      }
    } catch (error) {
      setValue("title", "");
      toast.error(
        `Um baralho com o título ${title} já existe. Tente outro título`
      );
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
