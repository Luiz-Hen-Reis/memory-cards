import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { Card, DeckData, UserData } from "@/types/UserInfo";
import { theme } from "@/styles/theme";
import { Title } from "../../index";
import Link from "next/link";
import styled, { css } from "styled-components";
import { recoverUserInformation } from "@/libs/auth";
import { useRouter } from "next/router";

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
    if (currentDeck!.deck.cards.length >= 1) {
      setCurrentCard(currentDeck!.deck.cards[index]);

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
    }
  }, [cardIsTurned]);

  function turnCard() {
    setCardIsTurned(true);
  }

  function handleNextCard() {
    setCardIsTurned(false);
    setIndex(index + 1);

    if (index === currentDeck!.deck.cards.length - 1) {
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
        <title>Baralho | {currentDeck!.deck.title}</title>
      </Head>
      <Container>
        {currentCard && (
          <>
            <CardItem>
              <CardFront ref={cardFrontEl}>
                {currentCard.frontContent}
              </CardFront>
              <CardBack ref={cardBackEl}>{currentCard.backContent}</CardBack>
            </CardItem>
            <BtnContainer>
              <button onClick={turnCard}>Virar</button>
              <button ref={nextCardBtn} onClick={handleNextCard}>
                Próximo Cartão
              </button>
            </BtnContainer>
          </>
        )}

        {!currentCard && (
          <Title>
            Você ainda não possuí nenhuma carta neste baralho.{" "}
            <Link href={"/deck/add-cards"}>Criar Nova Carta?</Link>
          </Title>
        )}
      </Container>
    </>
  );
}

export default Deck;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const res = await axios.get(`/api/auth/user/deck/${id}`);
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

const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};
    height: 80vh;
    margin-top: 1rem;
  `}
`;

const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    width: 30rem;
    height: 45rem;
    position: relative;
    perspective: 1500rem;
    -moz-perspective: 1500rem;
  `}
`;

const CardFront = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.ultraViolet};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45rem;
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: ${theme.borderRadius};
    overflow: hidden;
    box-shadow: ${theme.boxShadow};
  `}
`;

const CardBack = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45rem;
    background: ${theme.colors.ultraViolet};
    transition: all 0.1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: ${theme.borderRadius};
    overflow: hidden;
    box-shadow: ${theme.boxShadow};
    transform: rotateY(180deg);
  `}
`;

const BtnContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 1rem;

    button {
      font-size: ${theme.font.sizes.small};
      background-color: ${theme.colors.ultraViolet};
      padding: ${theme.spacings.small} ${theme.spacings.large};
      border-radius: ${theme.borderRadius};
      box-shadow: ${theme.boxShadow};
      cursor: pointer;

      &:nth-child(2):disabled {
        opacity: 0.5;
      }
    }
  `}
`;
