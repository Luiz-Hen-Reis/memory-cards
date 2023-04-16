import Head from "next/head";
import deck, { Deck as DeckType } from "@/mockupData";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as Styled from "./styles";
import { useRef } from "react";

type Props = {
  currentDeck: DeckType;
};

function Deck({ currentDeck }: Props) {
  const cardFrontEl = useRef<HTMLDivElement | null>(null);
  const cardBackEl = useRef<HTMLDivElement | null>(null);
  const nextCardBtn = useRef<HTMLButtonElement | null>(null);

  function turnCard() {
    cardFrontEl.current!.style.transform = "rotateY(-100deg)";
    cardBackEl.current!.style.transform = "rotateY(0)";
    nextCardBtn.current!.style.display = "block";
  }

  return (
    <>
      <Head>
        <title>Baralho | {currentDeck.title}</title>
      </Head>
      <Styled.Container>
        <Styled.Card>
          <Styled.CardFront ref={cardFrontEl}>{currentDeck.cards[0].front}</Styled.CardFront>
          <Styled.CardBack ref={cardBackEl}>{currentDeck.cards[0].back}</Styled.CardBack>
        </Styled.Card>
        <Styled.BtnContainer>
        <button onClick={turnCard}>Virar</button>
        <button ref={nextCardBtn}>Próximo Cartão</button>
        </Styled.BtnContainer>
      </Styled.Container>
    </>
  );
}

export default Deck;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const currentDeck = deck[Number(id)];

  return {
    props: {
      currentDeck,
    },
  };
};
