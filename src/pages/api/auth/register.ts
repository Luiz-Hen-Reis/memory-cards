import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import toCapitalize from "@/helpers/toCapitalize";

const handler: NextApiHandler = async (req, res) => {
  const { email, name, password } = req.body;

  const profileImg = "/assets/images/avatar.png";
  const userAlreadyExist = await prisma.user.findUnique({ where: { email } });

  if (userAlreadyExist) {
    return res.status(200).json({ userAlreadyExist });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashedPassword, profileImg },
  });

  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 /*1 hour*/,
        id: user.id,
      },
      "privateKey"
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: toCapitalize(user.name),
        email: user.email,
        profileImg,
      },
    });
  }
};

export default handler;
