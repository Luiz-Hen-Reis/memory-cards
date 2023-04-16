import Head from "next/head";
import deck, { Deck as DeckType, Card } from "@/mockupData";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as Styled from "./styles";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  currentDeck: DeckType;
};

function Deck({ currentDeck }: Props) {
  const [index, setIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<Card>(
    currentDeck.cards[index]
  );
  const [cardIsTurned, setCardIsTurned] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const router = useRouter();

  const cardFrontEl = useRef<HTMLDivElement>(null);
  const cardBackEl = useRef<HTMLDivElement>(null);
  const nextCardBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentCard(currentDeck.cards[index]);

    if (cardIsTurned) {
      cardFrontEl.current!.style.transform = "rotateY(-100deg)";
      cardBackEl.current!.style.transform = "rotateY(0)";
      nextCardBtn.current!.disabled = false;
    } else if (!cardIsTurned) {
      cardFrontEl.current!.style.transform = "rotateY(0)";
      cardBackEl.current!.style.transform = "rotateY(180deg)";
    }
  }, [cardIsTurned, disabled]);

  function turnCard() {
    setCardIsTurned(true);
    setDisabled(false);
  }

  function handleNextCard() {
    setIndex(index + 1);
    setCardIsTurned(false);
    setDisabled(true);

    if (index === currentDeck.cards.length - 1) {
      alert("Você terminou esse baralho");
      setIndex(0);
      router.push("/");
    }
  }

  return (
    <>
      <Head>
        <title>Baralho | {currentDeck.title}</title>
      </Head>
      <Styled.Container>
        <Styled.Card>
          <Styled.CardFront ref={cardFrontEl}>
            {currentCard.front} {currentCard.id}
          </Styled.CardFront>
          <Styled.CardBack ref={cardBackEl}>
            {currentCard.back} {currentCard.id}
          </Styled.CardBack>
        </Styled.Card>
        <Styled.BtnContainer disabled={disabled}>
          <button onClick={turnCard}>Virar</button>
          <button ref={nextCardBtn} onClick={handleNextCard}>
            Próximo Cartão
          </button>
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
