import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { id: userId, deckId } = req.query;

};

export default handler;
