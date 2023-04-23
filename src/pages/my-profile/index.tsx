import Head from "next/head";
import * as Styled from "./styles";
import { useAuthContext } from "@/contexts/AuthContext";

function MyProfile() {
    const { user } = useAuthContext();
  return (
    <>
      <Head>
        <title>Novo Baralho</title>
      </Head>
      <Styled.Container>
        <Styled.ProfileInfoContainer>
           {!user && 
            <div>Carregando...</div>
           }
           {user &&
             <div>
                <img src={user.profileImg} alt={user.name} />
             </div>
           }
            <label htmlFor="user-name">Nome</label>
            <input type="text" value={user?.name} name="user-name" />
            <label htmlFor="user-email">E-mail</label>
            <input type="text" value={user?.email} name="user-email" />

            <input type="submit" value="Enviar" />
        </Styled.ProfileInfoContainer>
      </Styled.Container>
    </>
  );
}

export default MyProfile;
