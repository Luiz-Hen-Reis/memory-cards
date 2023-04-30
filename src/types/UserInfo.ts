export type User = {
  id: number;
  name: string;
  email: string;
  profileImg: string;
  decks: Deck[];
};

export type Deck = {
  id: number;
  title: string;
  cards: Card[];
};

export type Card = {
  id: number;
  frontContent: string;
  backContent: string;
  deckId: number;
};
