import * as Styled from './styles';

function Header() {
  return (
    <Styled.Container>
        <Styled.HamburgerBtn>
            <span></span>
            <span></span>
            <span></span>
        </Styled.HamburgerBtn>
        <Styled.RightSide>
        <Styled.PlusBtn>
            <span></span>
            <span></span>
        </Styled.PlusBtn>
        <p>Criar Nova Coleção</p>
        </Styled.RightSide>
    </Styled.Container>
  )
}

export default Header