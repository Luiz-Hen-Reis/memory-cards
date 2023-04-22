import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  const { title } = req.body;

  const titleAlreadyExists = await prisma.deck.findFirst({ where: { title } });

  if (titleAlreadyExists) {
    return res.status(200).send({ title: "Already in use" });
  }

  const userId = parseInt(id as string);
  const newDeck = await prisma.deck.create({
    data: { title, userId },
  });

  res.status(201).json({ newDeck });
};

export default handler;
