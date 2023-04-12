import * as Styled from "./styles";
import { Deck } from "@/mockupData";
import Link from "next/link";

type Props = {
  deck: Deck;
};

function GridItem({ deck }: Props) {
  return (
    <Styled.Container>
      <Link href={`/deck/${deck.id}`}>
        <Styled.DeckTitle>
          <h1>{deck.title}</h1>
          <p>0 termos</p>
        </Styled.DeckTitle>
        <Styled.DeckUser>
          <img src="https://github.com/Luiz-Hen-Reis.png" alt="" />
          <span>{deck.user.name}</span>
        </Styled.DeckUser>
      </Link>
    </Styled.Container>
  );
}

export default GridItem;
