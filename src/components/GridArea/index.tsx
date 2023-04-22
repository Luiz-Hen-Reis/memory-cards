import * as Styled from "./styles";
import GridItem from "../GridItem";
import { Deck } from "@/types/UserInfo";

type Props = {
  decks: Deck[];
}

function GridArea({ decks }: Props) {
  return (
    <Styled.Container>
      <h1>Meus Baralhos</h1>
      <Styled.GridContainer>
        {decks.map((deck) => (
          <GridItem deck={deck} key={deck.id} />
        ))}
      </Styled.GridContainer>
    </Styled.Container>
  );
}

export default GridArea;
