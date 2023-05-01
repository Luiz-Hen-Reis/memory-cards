import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { deckId } = req.query;

  const deck = await prisma.deck.findFirst({
    where: { id: parseInt(deckId as string) },
    include: {
      user: { select: { id: true, name: true, profileImg: true, email: true } },
      cards: { where: { deckId: parseInt(deckId as string) } },
    },
  });

  res.json({ deck });
};

export default handler;
