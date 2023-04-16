import { HamburgerBtn } from "./components/Header/styles";

const deck = [
  {
    id: 1,
    title: "Title",
    user: {
      id: 1,
      name: "Fulano de tal",
      profilePicture: "https://github.com/Luiz-Hen-Reis.png",
    },
    cards: [
      {
        id: 1,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
      {
        id: 2,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
      {
        id: 3,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
    ],
  },
  {
    id: 2,
    title: "Title",
    user: {
      id: 1,
      name: "Fulano de tal",
      profilePicture: "https://github.com/Luiz-Hen-Reis.png",
    },
    cards: [
      {
        id: 1,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
        {
        id: 2,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
      {
        id: 3,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
    ],
  },
  {
    id: 3,
    title: "Title",
    user: {
      id: 1,
      name: "Fulano de tal",
      profilePicture: "https://github.com/Luiz-Hen-Reis.png",
    },
    cards: [
      {
        id: 1,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
        {
        id: 2,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
      {
        id: 3,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
    ],
  },
  {
    id: 4,
    title: "Title",
    user: {
      id: 1,
      name: "Fulano de tal",
      profilePicture: "https://github.com/Luiz-Hen-Reis.png",
    },
    cards: [
      {
        id: 1,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
        {
        id: 2,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
      {
        id: 3,
        front: "this is the front",
        back: "this is the back",
        collection: "Title",
      },
    ],
  },
];

export default deck;

export type Deck = {
  id: number;
  title: string;
  user: {
    id: number;
    name: string;
    profilePicture: string;
  };
  cards: Card[];
};

export type Card = {
  id: number;
  front: string;
  back: string;
  collection: string;
};

