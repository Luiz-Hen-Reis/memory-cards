import Link from "next/link";
import * as Styled from "./styles";
import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useAuthContext } from "@/contexts/AuthContext";

const DynamicModal = dynamic(() => import("../Modal"));

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropDownOn, setDropDownOn] = useState(false);

  const { user, signOut } = useAuthContext();

  function closeModal() {
    setModalIsOpen(false);
  }  

  return (
    <Styled.Container>
      {modalIsOpen && (
        <DynamicModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
      <Styled.UserInfo>
        <Link href={"/deck/add-cards"}>Adicionar Cartas a um Baralho</Link>
        <Link href={"/"}>Meus Baralhos</Link>
        {!user && "Carregando..."}
        {user && (
          <div onClick={() => setDropDownOn(!dropDownOn)}>
            <img src={user?.profileImg} alt="" />
            <p>{user?.name}</p>
            <span></span>
            {dropDownOn && (
              <Styled.DropDownMenu>
                <Link href={"/"}>Meu Perfil</Link>
                <button onClick={signOut}>
                  Sair
                </button>
              </Styled.DropDownMenu>
            )}
          </div>
        )}
      </Styled.UserInfo>
      <Styled.HamburgerBtn onClick={() => setModalIsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Styled.HamburgerBtn>
      <Link href={"/deck/new-deck"}>
        <Styled.AddBtn>
          <Styled.PlusSign>
            <span></span>
            <span></span>
          </Styled.PlusSign>
          <p>Criar Novo Baralho</p>
        </Styled.AddBtn>
      </Link>
    </Styled.Container>
  );
}

export default Header;
