import Head from "next/head";
import * as Styled from "./styles";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { recoverUserInformation } from "@/libs/auth";
import { Card, DeckData, UserData } from "@/types/UserInfo";
import { theme } from "@/styles/theme";

type Props = {
  currentDeck: DeckData;
};

function Deck({ currentDeck }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [currentCard, setCurrentCard] = useState<Card | null>(
    currentDeck.deck.cards[index]
  );
  const [cardIsTurned, setCardIsTurned] = useState(false);

  const router = useRouter();

  const cardFrontEl = useRef<HTMLDivElement>(null);
  const cardBackEl = useRef<HTMLDivElement>(null);
  const nextCardBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentCard(currentDeck.deck.cards[index]);


      if (cardIsTurned) {
        cardFrontEl.current!.style.transform = "rotateY(-100deg)";
        cardBackEl.current!.style.transform = "rotateY(0)";
        nextCardBtn.current!.removeAttribute("disabled");
        cardBackEl.current!.style.color = `${theme.colors.mintCream}`;
      } else if (!cardIsTurned) {
        cardFrontEl.current!.style.transform = "rotateY(0)";
        cardBackEl.current!.style.transform = "rotateY(180deg)";
        cardBackEl.current!.style.color = `${theme.colors.ultraViolet}`;
        nextCardBtn.current!.setAttribute("disabled", "");
      }
    
  }, [cardIsTurned]);

  function turnCard() {
    setCardIsTurned(true);
  }

  function handleNextCard() {
    setCardIsTurned(false);
    setIndex(index + 1);

    if (index === currentDeck.deck.cards.length - 1) {
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
        <title>Baralho | {currentDeck.deck.title}</title>
      </Head>
      <Styled.Container>
        {currentCard && (
          <>
            <Styled.Card>
              <Styled.CardFront ref={cardFrontEl}>
                {currentCard.frontContent}
              </Styled.CardFront>
              <Styled.CardBack ref={cardBackEl}>
                {currentCard.backContent}
              </Styled.CardBack>
            </Styled.Card>
            <Styled.BtnContainer>
              <button onClick={turnCard}>Virar</button>
              <button ref={nextCardBtn} onClick={handleNextCard}>
                Próximo Cartão
              </button>
            </Styled.BtnContainer>
          </>
        )}

        {!currentCard && <p>opa</p>}
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

  const res = await axios.get(`http://localhost:3000/api/auth/user/deck/${id}`);
  const currentDeck: DeckData = res.data;

  const { "nextmemorycard.token": token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const userData: UserData = await recoverUserInformation(token);

  return {
    props: {
      currentDeck,
    },
  };
};
