import Head from "next/head";
import * as Styled from "./styles";

function NewCards() {
  return (
    <>
      <Head>
        <title>Novo Baralho</title>
      </Head>
      <main>
        <Styled.Container>nova carta</Styled.Container>
      </main>
    </>
  );
}

export default NewCards;
