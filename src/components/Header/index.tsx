import Link from "next/link";
import * as Styled from "./styles";

function Header() {
  return (
    <Styled.Container>
      <Styled.UserInfo>
        <Styled.MyDeck>
          <Styled.MyDeckBtn>
            <span></span>
            <span></span>
            <span></span>
          </Styled.MyDeckBtn>
          <p>Meus Baralhos</p>
        </Styled.MyDeck>
        <img src="https://github.com/Luiz-Hen-Reis.png" alt="" />
        <p>fulano de tal</p>
      </Styled.UserInfo>
      <Styled.HamburgerBtn>
        <span></span>
        <span></span>
        <span></span>
      </Styled.HamburgerBtn>
      <Link href={"/new-deck"}>
        <Styled.RightSide>
          <Styled.PlusBtn>
            <span></span>
            <span></span>
          </Styled.PlusBtn>
          <p>Criar Novo Baralho</p>
        </Styled.RightSide>
      </Link>
    </Styled.Container>
  );
}

export default Header;
