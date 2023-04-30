import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { cardFront, cardBack } = req.body;
  const { deckId } = req.query;

  const parsedIntDeckId = parseInt(deckId as string);

  const newCard = await prisma.card.create({
    data: { frontContent: cardFront, backContent: cardBack, deckId: parsedIntDeckId },
  });

  res.json({ newCard });
};

export default handler;
