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
        meus baralhos
        logout
      </Styled.ModalBody>
    </Styled.Container>
  );
}

export default Modal;
