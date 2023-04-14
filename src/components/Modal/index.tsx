import Link from "next/link";
import * as Styled from "./styles";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

function Modal({ modalIsOpen, closeModal }: Props) {
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
        <button>Sair</button>
      </Styled.ModalBody>
    </Styled.Container>
  );
}

export default Modal;
