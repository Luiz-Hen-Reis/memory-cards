import Link from "next/link";
import * as Styled from "./styles";
import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicModal = dynamic(() => import("../Modal"));

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropDownOn, setDropDownOn] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Styled.Container>
      {modalIsOpen && (
        <DynamicModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
      <Styled.UserInfo>
        <Link href={"/"}>Meus Baralhos</Link>
        <div onClick={() => setDropDownOn(!dropDownOn)}>
          <img src="https://github.com/Luiz-Hen-Reis.png" alt="" />
          <p>fulano de tal</p>
          <span></span>
          {dropDownOn && (
            <Styled.DropDownMenu>
              <Link href={"/"}>Meu Perfil</Link>
              <Link href={"/auth/login"}>Sair</Link>
            </Styled.DropDownMenu>
          )}
        </div>
      </Styled.UserInfo>
      <Styled.HamburgerBtn onClick={() => setModalIsOpen(true)}>
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
