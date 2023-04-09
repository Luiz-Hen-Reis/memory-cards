import { GridArea, Header } from "@/components";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Memory Cards</title>
      </Head>
      <Header />
      <main>
        <GridArea />
      </main>
    </>
  )
}

export default Index;
