import Head from "next/head";
import * as Styled from "./styles";
import { useAuthContext } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";

function MyProfile() {
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
          <input type="text" {...register("cardFront")} required/>

          <label htmlFor="cardBack">Verso</label>
          <input type="text" {...register("cardBack")} required/>

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

          <input type="submit" value="Criar nova carta" />
        </Styled.FormContainer>
      </Styled.Container>
    </>
  );
}

export default MyProfile;
