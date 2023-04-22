import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id as string) },
  });

  const decks = await prisma.deck.findMany({
    where: { userId: parseInt(id as string) },
  });

  if (user) {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      profileImg: user.profileImg,
      decks,
    });
  } else {
    res.status(400).send({ error: "User not found" });
  }
};

export default handler;