import Head from "next/head";
import * as Styled from "./styles";
import axios from "axios";
import { useAuthContext } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { recoverUserInformation } from "@/libs/auth";
import { toast } from "react-toastify";

function AddCards() {
  const { user } = useAuthContext();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = handleSubmit(async ({ cardFront, cardBack, deck: deckId }) => {
    await axios.post(
      `/api/auth/user/deck/${deckId}/add-card`,
      { cardFront, cardBack })
      toast.success('Carta criada com sucesso!');
      setValue("cardFront", "");
      setValue("cardBack", "");
  });

  return (
    <>
      <Head>
        <title>Novo Baralho</title>
      </Head>
      <Styled.Container>
        <Styled.FormContainer onSubmit={onSubmit}>
          <h1>Adicionar Novas Cartas</h1>
          <label htmlFor="cardFront">Frente</label>
          <input type="text" {...register("cardFront")} required />

          <label htmlFor="cardBack">Verso</label>
          <input type="text" {...register("cardBack")} required />

          <label htmlFor="deck">Escolha o baralho:</label>
          {!user && <p>Carregando....</p>}
          {user && (
            <select {...register("deck")}>
              {user.decks.map((deck) => (
                <option value={deck.id} key={deck.id}>
                  {deck.title}
                </option>
              ))}
            </select>
          )}

          <input
            type="submit"
            value="Criar nova carta"
            disabled={user ? false : true}
          />
        </Styled.FormContainer>
      </Styled.Container>
    </>
  );
}

export default AddCards;

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
