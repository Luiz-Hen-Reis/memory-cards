import Head from "next/head";
import * as Styled from "./styles";
import deck, { Deck as DeckType, Card } from "@/mockupData";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { recoverUserInformation } from "@/libs/auth";
import axios from "axios";

type Props = {
  currentDeck: DeckType;
};

function Deck({ currentDeck }: Props) {
  const [index, setIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<Card>(
    currentDeck.cards[index]
  );
  const [cardIsTurned, setCardIsTurned] = useState(false);

  const router = useRouter();

  const cardFrontEl = useRef<HTMLDivElement>(null);
  const cardBackEl = useRef<HTMLDivElement>(null);
  const nextCardBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentCard(currentDeck.cards[index]);

    if (index === 3) {
      nextCardBtn.current!.style.background = "red";
    }

    if (cardIsTurned) {
      cardFrontEl.current!.style.transform = "rotateY(-100deg)";
      cardBackEl.current!.style.transform = "rotateY(0)";
      nextCardBtn.current!.removeAttribute("disabled");
    } else if (!cardIsTurned) {
      cardFrontEl.current!.style.transform = "rotateY(0)";
      cardBackEl.current!.style.transform = "rotateY(180deg)";
      nextCardBtn.current!.setAttribute("disabled", "");
    }
  }, [cardIsTurned]);

  function turnCard() {
    setCardIsTurned(true);
  }

  function handleNextCard() {
    setIndex(index + 1);
    setCardIsTurned(false);

    if (index === currentDeck.cards.length - 1) {
      toast.success("Você terminou esse baralho!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
      });
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
        <Styled.BtnContainer>
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


  const { "nextmemorycard.token": token } = parseCookies(context);

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
      // currentDeck,
    },
  };
};
