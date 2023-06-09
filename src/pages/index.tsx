import Head from "next/head";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { GridArea } from "@/components";
import {  UserData } from "@/types/UserInfo";
import { recoverUserInformation } from "@/libs/auth";
import Link from "next/link";
import styled, { css } from "styled-components";

type Props = {
  userData: UserData;
};

function Index({ userData }: Props) {

  return (
    <>
      <Head>
        <title>Memory Cards</title>
      </Head>
      <main>
        {userData.user.decks.length < 1 &&
          <Title>Você ainda não possuí nenhum baralho. <Link href={'/deck/new-deck'}>Criar Novo Baralho?</Link></Title>
        }
        {userData.user.decks.length >= 1 &&
          <GridArea decks={userData.user.decks} />
        }
      </main>
    </>
  );
}

export default Index;

export const Title = styled.h1`
  ${({ theme }) => css`
  text-align: center;
  color: ${theme.colors.columbiaBlue};
  margin-top: ${theme.spacings.xhuge};

  a {
    cursor: pointer;
    color: ${theme.colors.mintCream};
  }

  `}

`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "nextmemorycard.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const userData: UserData = await recoverUserInformation(token);

  return {
    props: {
      userData,
    },
  };
};
