export type UserData = {
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  profileImg: string;
  decks: Deck[];
};

export type DeckData = {
  deck: Deck;
}

export type Deck = {
  id: number;
  title: string;
  cards: Card[];
  user: {
    id: number;
    name: string;
    email: string;
    profileImg: string;
  };
  userId: number;
};

export type Card = {
  id: number;
  frontContent: string;
  backContent: string;
  deckId: number;
};
