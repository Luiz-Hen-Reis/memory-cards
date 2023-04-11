import * as Styled from './styles';
import { Deck } from '@/mockupData';
import Link from 'next/link';

type Props = {
  deck: Deck
}

function GridItem({ deck }: Props) {
  return (
    <Styled.Container>
        <Link href={`/${deck.title}`}>
        <Styled.DeckTitle>
        <h1>{deck.title}</h1>
        <p>0 termos</p>
        </Styled.DeckTitle>
        <span>{deck.user.name}</span>
        </Link>
    </Styled.Container>
  )
}

export default GridItem