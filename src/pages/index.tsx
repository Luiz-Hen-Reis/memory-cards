import Head from "next/head";
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { GridArea } from "@/components";

function Index() {


  return (
    <>
      <Head>
        <title>Memory Cards</title>
      </Head>
      <main>
        <GridArea />
      </main>
    </>
  )
}

export default Index;

export const getServerSideProps: GetServerSideProps =  async (ctx) => {
  const { 'nextmemorycards.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
