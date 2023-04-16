import Link from "next/link";
import * as Styled from "./styles";
import { useRouter } from "next/router";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

function Modal({ modalIsOpen, closeModal }: Props) {
  const router = useRouter();

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
          <img src="https://github.com/Luiz-Hen-Reis.png" alt="" />
          <p>fulano de tal</p>
        </Styled.UserInfo>
        <Link href={"/"} onClick={closeModal}>
          Meus Baralhos
        </Link>
        <button onClick={() => router.push('/auth/login')}>Sair</button>
      </Styled.ModalBody>
    </Styled.Container>
  );
}

export default Modal;
