import Link from "next/link";
import * as Styled from "./styles";
import Modal from "../Modal";
import { useState } from "react";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Styled.Container>
      <Modal openModal={openModal} />
      <Styled.UserInfo>
        <Link href={"/"}>
          <Styled.MyDeck>
            <Styled.MyDeckBtn>
              <span></span>
              <span></span>
              <span></span>
            </Styled.MyDeckBtn>
            <p>Meus Baralhos</p>
          </Styled.MyDeck>
        </Link>
        <img src="https://github.com/Luiz-Hen-Reis.png" alt="" />
        <p>fulano de tal</p>
      </Styled.UserInfo>
      <Styled.HamburgerBtn onClick={() => setOpenModal(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Styled.HamburgerBtn>
      <Link href={"/deck/new-deck"}>
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
