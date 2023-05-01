import { useAuthContext } from "@/contexts/AuthContext";
import * as Styled from "./styles";
import Link from "next/link";
import { Deck } from "@/types/UserInfo";

type Props = {
  deck: Deck;
};

function GridItem({ deck }: Props) {
  const { user } = useAuthContext();

  return (
    <Styled.Container>
      <Link href={`/deck/${deck.id}`}>
        <Styled.DeckTitle>
          <h1>{deck.title}</h1>
          <p>{deck.cards.length} termos</p>
        </Styled.DeckTitle>
        <Styled.DeckUser>
          {!user && <span>Carregando...</span>}
          {user && (
            <>
              <img src={user.profileImg} alt={user.name} />
              <span>{user.name}</span>
            </>
          )}
        </Styled.DeckUser>
      </Link>
    </Styled.Container>
  );
}

export default GridItem;
