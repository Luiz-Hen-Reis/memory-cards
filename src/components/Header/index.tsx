import Link from "next/link";
import * as Styled from "./styles";

function Header() {
  return (
    <Styled.Container>
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
