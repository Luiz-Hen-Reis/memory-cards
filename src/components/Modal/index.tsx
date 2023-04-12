import * as Styled from './styles';

type Props = {
    openModal: boolean;
}

function Modal({ openModal }: Props) {
  return (
    <Styled.Container openModal={openModal}>
        {openModal.toString()}
    </Styled.Container>
  )
}

export default Modal