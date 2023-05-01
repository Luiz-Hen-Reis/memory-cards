import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import toCapitalize from "@/helpers/toCapitalize";

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  const decks = await prisma.user.findUnique({ where: { email } }).decks();

  if (!user) {
    return res.status(400).send({ status: "Cannot find user" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 /*1 hour*/,
        id: user.id,
      },
      "privateKey"
    );
    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: toCapitalize(user.name),
        email: user.email,
        profileImg: user.profileImg,
        decks,
      },
    });
  }
};

export default handler;