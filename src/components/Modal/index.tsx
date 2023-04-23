import Link from "next/link";
import * as Styled from "./styles";
import { useRouter } from "next/router";
import { useAuthContext } from "@/contexts/AuthContext";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

function Modal({ modalIsOpen, closeModal }: Props) {
  const router = useRouter();
  const { user, signOut } = useAuthContext();

  return (
    <Styled.Container modalIsOpen={modalIsOpen}>
      <Styled.Header>
        <Styled.CloseBtn onClick={closeModal}>
          <span></span>
          <span></span>
        </Styled.CloseBtn>
      </Styled.Header>
      <Styled.ModalBody>
        <Styled.UserInfo>
          {!user && "Carregando..."}
          {user && (
            <>
              <img src={user.profileImg} alt="" />
              <p>{user.name}</p>
            </>
          )}
        </Styled.UserInfo>
        <Link href={"/my-profile"} onClick={closeModal}>
          Meu Perfil
        </Link>
        <Link href={"/"} onClick={closeModal}>
          Meus Baralhos
        </Link>
        <button onClick={signOut}>Sair</button>
      </Styled.ModalBody>
    </Styled.Container>
  );
}

export default Modal;
