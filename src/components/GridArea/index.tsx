import decks from "@/mockupData";
import * as Styled from "./styles";
import GridItem from "../GridItem";

function GridArea() {
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
