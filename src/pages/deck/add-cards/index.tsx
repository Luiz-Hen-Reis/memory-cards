import Head from "next/head";
import styled, { css } from "styled-components";
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

  const onSubmit = handleSubmit(
    async ({ cardFront, cardBack, deck: deckId }) => {
      await axios.post(`/api/auth/user/deck/${deckId}/add-card`, {
        cardFront,
        cardBack,
      });
      toast.success("Carta criada com sucesso!");
      setValue("cardFront", "");
      setValue("cardBack", "");
    }
  );

  return (
    <>
      <Head>
        <title>Novo Baralho</title>
      </Head>
      <Container>
        <FormContainer onSubmit={onSubmit}>
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
        </FormContainer>
      </Container>
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

const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    font-size: ${theme.font.sizes.small};
    margin: 0 1rem;
  `}
`;

const FormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: -5rem 1rem;

    h1 {
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
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

    select {
      height: ${theme.spacings.xlarge};
      background-color: ${theme.colors.mintCream};
      border-radius: ${theme.borderRadius};
      padding: 5px;
      box-shadow: ${theme.boxShadow};
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.eerieBlack};
    }
  `}
`;
