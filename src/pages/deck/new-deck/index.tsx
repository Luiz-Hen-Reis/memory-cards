import Head from "next/head";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";

function NewDeck() {
  const { register, handleSubmit } = useForm();
  const { user } = useAuthContext();

  const onSubmit = handleSubmit(async (data) => {
    try {
      
    } catch {
      toast.error('Ops, algum baralho já está usando esse título')
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
